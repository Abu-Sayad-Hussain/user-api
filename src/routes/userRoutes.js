const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validationMiddleware');
const { createUser, getAllUsers } = require('../controllers/userController');
const authenticateUser = require('../middleware/authenticationMiddleware');

const router = express.Router();

// Validation middleware for creating a user
const validateUser = [
  body('name').isString().trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  validate,
];

// Create a user
router.post('/', validateUser, createUser);

// Retrieve all users (authentication required)
router.get('/', authenticateUser, getAllUsers);

module.exports = router;
