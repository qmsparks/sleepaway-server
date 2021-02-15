const bcrypt = require('bcryptjs');
const db = require('../models');
const utils = require('../utils');

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
    const foundUser = await db.User.findOne({ email: req.body.email });

    if (!foundUser) return res.send({
      message: 'No account associated with that email'
    });

    const match = await bcrypt.compare(req.body.password, foundUser.password);

    if (!match) return res.send({
      message: 'Email or password incorrect'
    });

    const response = await utils.token.addToken(foundUser._id);
    return res.status(200).json(response);

  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    });
  }
}

module.exports = {
  register,
  login,
}