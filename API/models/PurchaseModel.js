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
    required: true
  },
});

module.exports = mongoose.model('Purchase', purchaseSchema);

