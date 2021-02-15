const jwt = require('jsonwebtoken');
require('dotenv').config();

const addToken = userId => {
  const signedJwt = jwt.sign(
    {
      _id: userId,  
    },
    process.env.SECRET,
    {
      expiresIn: "24hr"
    }
  );

  return ({
    status: 200,
    message: "Success",
    id: userId,
    signedJwt
  })
}

module.exports = {
  addToken,
}