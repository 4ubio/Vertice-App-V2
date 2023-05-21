const Skill = require('../models/Skill');

module.exports = {
    async getAllSkills(req, res) {
        const skills = await Skill.find({});
        if (skills) {
            return res.json(skills);
        } else {
            res.json({});
        }
    },
  async createSkill(req, res) {
    const {
      title,
      generation
    } = req.body;
    console.log(req);
    const skill = await Skill.create({
      title,
      generation
    });
    console.log(skill);
    return res.json(skill);
  },
  //get skills according to gen
  async getSkillsByGen(req, res) {
    const { gen } = req.params;
    const skills = await Skill.aggregate([
      {
        $match: {
          generation: { $in: [gen] },
        },
      },
    ]);
    console.log(skills);
    if (skills) {
      console.log(skills);
      return res.json(skills);
    } else {
      res.json({ message: 'No se encontraron competencias' });
    }
  },
};
