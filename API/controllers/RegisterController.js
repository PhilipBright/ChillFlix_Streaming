const User = require('../models/RegisterModel');

const RegisterController = async (req, res) => {
  try {
    const { username, email, password} = req.body;

    // Create a new user document in the database
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
  
};

module.exports = RegisterController;
