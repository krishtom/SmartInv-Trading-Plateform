const mongoose = require("mongoose"); // Import mongoose
const { OrdersSchema } = require("../schemas/OrdersSchema"); // Import schema

// Create the OrdersModel using mongoose.model
const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };
