// purchaseController.js

// Import the necessary models or database operations
const Purchase = require('../models/PurchaseModel');

// Handle the purchase request
// const createPurchase = async (req, res) => {
//   try {
//     const purchaseData = req.body;
//     console.log(purchaseData);
//     // Save the purchase data to the database
//     const newPurchase = await Purchase.create(purchaseData);

//     res.status(201).json({ message: 'Purchase created successfully', purchase: newPurchase });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to create purchase' });
//   }
// };

// module.exports = {
//   createPurchase,
// };

module.exports.createPurchase = async (req, res) => {
  try{
    const { username, subscription, paymentMethod, date } = req.body;
    const newPurchase = new Purchase({  username, subscription, paymentMethod, date });
    await newPurchase.save();
    res.status(201).json({ message: 'Purchase successfully' });
  } catch (error) {
    console.error('Failed to purchase', error)
    res.status(500).json({error: 'Failed to purchase subscription'})
  }
}

module.exports.getOrder = async (req, res) => {
  try {
    const orders = await Purchase.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get orders' });
  }
};

