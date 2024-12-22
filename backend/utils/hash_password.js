const bcyrpt = require("bcryptjs");

const hashPassword = async (password) => {
 const salt = await bcyrpt.genSalt(10);
 return await bcyrpt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
 return await bcyrpt.compare(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
