const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  name: String,
  lastNames: String,
  idIest: Number,
  email: String,
  gen: Number,
  bachelor: String,
});

module.exports = mongoose.model('Applicant', ApplicantSchema);
