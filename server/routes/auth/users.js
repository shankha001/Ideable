const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

//===User Model===//
const User = require('../../models/User');

// @route POST auth/users/register
// @desc Register User
router.post('/register', (req, res) => {
  // console.log(req.body);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ error: 'Email already exists !' });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      //===Hashing===//
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json(user);
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST auth/users/login
// @desc Login User
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    } else {
      return res.status(200).json({ msg: 'Success' });
    }
  });
});

module.exports = router;
