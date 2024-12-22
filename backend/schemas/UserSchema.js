const { Schema, model } = require("mongoose");

const userSchema = new Schema({
 username: { type: String, required: true, unique: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },

 role: { type: String, default: "user", enum: ["user", "admin"] }, // user, admin
 token: { type: String, required: false },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
