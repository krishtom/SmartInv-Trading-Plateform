const jwt = require("jsonwebtoken");
const UserModel = require("../schemas/UserSchema");
const myenv = require("../config/myenv");

const isAuthenticated = async (req, res, next) => {
 try {
  const token = (req.headers.authorization || "").split(" ")[1];

  if (!token) {
   return res.status(401).json({ message: "Unauthorized" });
  }

  const payload = jwt.verify(token.trim(), myenv.JWT_SECRET);

  if (!payload) {
   return res.status(401).json({ message: "Invalid Token" });
  }

  const { id } = payload;

  const userDetails = await UserModel.findById(id);

  if (!userDetails) {
   return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = userDetails;

  next();
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
};

module.exports = isAuthenticated;
