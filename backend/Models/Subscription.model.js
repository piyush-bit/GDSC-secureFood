const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  subscriptionType: { type: String, required: true },
  // Add other attributes as needed
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;