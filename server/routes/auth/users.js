require('dotenv').config();
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
        name: req.body.name,
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
    }
    // compare password with hashed password
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        // result === true
        // console.log(user._id);
        const payload = {
          id: user._id,
          name: user.name,
        };

        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: '1d' },
          (err, token) => {
            res.json({
              token: token,
            });
          }
        );
      } else {
        return res.status(401).json({ error: 'Incorrect Password' });
      }
    });
  });
});

module.exports = router;
