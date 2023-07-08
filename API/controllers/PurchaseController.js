// purchaseController.js

// Import the necessary models or database operations
const Purchase = require('../models/PurchaseModel');

// Handle the purchase request
const createPurchase = async (req, res) => {
  try {
    const purchaseData = req.body;

    // Save the purchase data to the database
    const newPurchase = await Purchase.create(purchaseData);

    res.status(201).json({ message: 'Purchase created successfully', purchase: newPurchase });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create purchase' });
  }
};

// Export the controller functions
module.exports = {
  createPurchase,
};
