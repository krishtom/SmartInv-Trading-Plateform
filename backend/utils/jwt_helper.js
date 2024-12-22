const jwt = require("jsonwebtoken");
const myenv = require("../config/myenv");

const generateToken = (payload) => {
 return jwt.sign(payload, myenv.JWT_SECRET, { expiresIn: "30d" });
};

const verifyToken = (token) => {
 return jwt.verify(token, myenv.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
