const express = require('express');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');

router.post('/register', RegisterController);
router.get('/history', RegisterController.getRegister)
router.get('/count', RegisterController.getUserCount);
module.exports = router;