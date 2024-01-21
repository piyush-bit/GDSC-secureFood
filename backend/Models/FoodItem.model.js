const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  providerID: { type: mongoose.Schema.Types.ObjectId, ref: 'SurplusFoodProvider', required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  // Add other attributes as needed
});

const SurplusFoodItem = mongoose.model('SurplusFoodItem', itemSchema);

module.exports = SurplusFoodItem;
