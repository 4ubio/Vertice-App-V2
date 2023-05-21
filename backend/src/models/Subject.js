const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  title: String,
  generation: Array
});

module.exports = mongoose.model('Subject', SubjectSchema);
