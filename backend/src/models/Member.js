const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  lastNames: String,
  idIest: Number,
  email: String,
  gen: Number,
  bachelor: String,
  profilePicture: String,
  strikes: Number,
  status: Number,
});

module.exports = mongoose.model('Member', MemberSchema);
