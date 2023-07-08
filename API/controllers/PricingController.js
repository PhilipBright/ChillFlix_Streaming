// // API/controllers/PricingController.js

// const Pricing = require('../models/PricingModel');

// // GET all pricing plans
// const getAllPricingPlans = async (req, res) => {
//   try {
//     const pricingPlans = await Pricing.find();
//     res.json(pricingPlans);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET a specific pricing plan by ID
// const getPricingPlanById = async (req, res) => {
//   try {
//     const pricingPlan = await Pricing.findById(req.params.id);
//     if (!pricingPlan) {
//       return res.status(404).json({ message: 'Pricing plan not found' });
//     }
//     res.json(pricingPlan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // POST create a new pricing plan
// const createPricingPlan = async (req, res) => {
//   try {
//     const pricingPlan = new Pricing(req.body);
//     await pricingPlan.save();
//     res.status(201).json(pricingPlan);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // PUT update a pricing plan
// const updatePricingPlan = async (req, res) => {
//   try {
//     const pricingPlan = await Pricing.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!pricingPlan) {
//       return res.status(404).json({ message: 'Pricing plan not found' });
//     }
//     res.json(pricingPlan);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // DELETE delete a pricing plan
// const deletePricingPlan = async (req, res) => {
//   try {
//     const pricingPlan = await Pricing.findByIdAndDelete(req.params.id);
//     if (!pricingPlan) {
//       return res.status(404).json({ message: 'Pricing plan not found' });
//     }
//     res.json({ message: 'Pricing plan deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getAllPricingPlans,
//   getPricingPlanById,
//   createPricingPlan,
//   updatePricingPlan,
//   deletePricingPlan,
// };
