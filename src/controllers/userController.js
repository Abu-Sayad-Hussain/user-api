const User = require('../models/User');

// Controller function to create a new user
const createUser = async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await User.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.email) { // Check for duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
      }
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser, getAllUsers };
