const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});


const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;