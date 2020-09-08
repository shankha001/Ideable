const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route POST auth/users/register
// @desc Register User
router.post('/register', (req, res) => {
  res.send('Register');
});

// @route POST auth/users/login
// @desc Register User
router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;
