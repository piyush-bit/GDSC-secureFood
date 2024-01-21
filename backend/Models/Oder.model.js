const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemID: { type: mongoose.Schema.Types.ObjectId, ref: 'SurplusFoodItem', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  // Add other attributes as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;