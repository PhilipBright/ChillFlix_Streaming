// purchaseRoutes.js

const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/PurchaseController');

// Define the route for creating a purchase
router.post('/purchase', purchaseController.createPurchase);

module.exports = router;
