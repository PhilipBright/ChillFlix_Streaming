const User = require('../models/RegisterModel');

const RegisterController = async (req, res) => {
  try {
    const { username, email, password, subscription } = req.body;

    // Create a new user document in the database
    const newUser = new User({ username, email, password, subscription });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

module.exports = RegisterController;

module.exports.getRegister = async (req, res) => {
  try{
    const register = await User.find()
    res.status(200).json(register)
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'error fetching data'})
  }
}
module.exports.getUserCount = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ count: userCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get user count' });
  }
};