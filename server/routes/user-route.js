const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const verifyToken = require('../Middleware/verifytoken');

mongoose.connect('mongodb://localhost:27017/ZozysDB');

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number
});
const User = mongoose.model("User", UserSchema);


router.post('/signup', (req, res) => {
  const { username, email, password, number } = req.body;
  const user = new User({
    username,
    email,
    password,
    number,
  });
  user.save();

  jwt.sign({id: user._id}, 'zozysenterprisetoken', { expiresIn: '4h' }, (err, encoded) => {
    if(err) res.json({ auth: false, message:'Failed to create token'});
    else res.json({ auth: true, token: encoded });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({email: email}, (err, userdata) => {
    err && res.status(401).send(err);
    if(!userdata) {
      res.json({auth: false, message:'User not found'});
    } else {
      if(userdata.password === password){
        jwt.sign({id: userdata._id}, 'zozysenterprisetoken', { expiresIn: '4h' }, (err, encoded) => {
          if(err) res.json({ auth: false, message: 'Failed to create token' });
          else res.json({ auth: true, token: encoded });
        });
      }
      else {
        res.json({ auth: false, message:'Invalid Email Or Password' });
      }
    }
  })
});

router.get('/', verifyToken, (req, res) => {
  User.findOne({_id: req.id}, (err, userData) => {
    res.json({data: userData})
  })
});

module.exports = router;