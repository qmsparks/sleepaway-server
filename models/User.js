const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true
  },
  isLindworm: {
    type: Boolean,
    default: false
  }
})

userSchema.set('toJSON', {
  transform: (doc, ret, opt) => {
    delete ret['password'];
    return ret;
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;