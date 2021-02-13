const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/sleepaway-db';
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

mongoose.connect(connectionString, configOptions);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose error: ${err}`);
})

module.exports = {
  User: require('./User'),
  Session: require('./Session'),
}