const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  subscription: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;