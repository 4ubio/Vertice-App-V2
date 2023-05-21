const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  title: String,
  generation: Array
});

module.exports = mongoose.model('Skill', SkillSchema);
