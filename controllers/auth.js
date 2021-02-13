const bcrypt = require('bcryptjs');
const db = require('../models');
// const utils = require('../utils');

const register = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({email: req.body.email});

    if (foundUser) return res.send({
      message: 'Account already registered to email'
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    const createdUser = await db.User.create(req.body);

    return res.status(201).json({
      status: 201,
      message: "Success",
      createdUser
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const login = async (req, res) => {
  try {
    
  } catch (err) {
    
  }
}

module.exports = {
  register,
  login,
}