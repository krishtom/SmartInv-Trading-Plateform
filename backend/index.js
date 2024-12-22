require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const UserModel = require("./schemas/UserSchema");
const { comparePassword, hashPassword } = require("./utils/hash_password");
const { verifyToken, generateToken } = require("./utils/jwt_helper");
const isAuthenticated = require("./middlewares/is_authenticated");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const handleInternalError = (req, res, error) => {
 return res.status(500).json({ error: error.message });
};

app.post("/login", async (req, res) => {
 try {
  const { username, password } = req.body;

  if (!username || !password) {
   return res.status(400).json({ error: "Invalid request" });
  }

  const userDetails = await UserModel.findOne({ username });

  if (!userDetails) {
   return res.status(404).json({ error: "User not found" });
  }

  const isPasswordValid = await comparePassword(password, userDetails.password);

  if (!isPasswordValid) {
   return res.status(401).json({ error: "Invalid password" });
  }

  const token = generateToken({ id: userDetails._id });
  await UserModel.updateOne({ _id: userDetails._id }, { token });

  return res.send({ token, userDetails });
 } catch (error) {
  return handleInternalError(req, res, error);
 }
});

app.post("/register", async (req, res) => {
 try {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
   return res.status(400).json({ error: "Invalid request" });
  }

  const existingUser = await UserModel.findOne({ username });

  if (existingUser) {
   return res.status(409).json({ error: "User already exists" });
  }

  const hashedPassword = await hashPassword(password);

  await UserModel.create({ username, password: hashedPassword, email });

  return res.send({ message: "User created successfully" });
 } catch (error) {
  return handleInternalError(req, res, error);
 }
});

app.post("/verify-token", isAuthenticated, async (req, res) => {
 try {
  return res.send({ userDetails: req.user });
 } catch (error) {
  return handleInternalError(req, res, error);
 }
});

app.get("/allHoldings", async (req, res) => {
 let allHoldings = await HoldingsModel.find({});
 res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
 let allPositions = await PositionsModel.find({});
 res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
 let newOrder = new OrdersModel({
  name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode: req.body.mode,
 });

 newOrder.save();

 res.send("Order saved!");
});

app.get("/orders", async (req, res) => {
 try {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
 } catch (err) {
  res.status(500).send("Error fetching orders: " + err.message);
 }
});

app.listen(PORT, () => {
 console.log("App started!");
 mongoose.connect(url);
 console.log("DB connected!");
});
