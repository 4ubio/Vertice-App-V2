const Subject = require('../models/Subject');

module.exports = {
    async getAllSubjects(req, res) {
        const subjects = await Subject.find({});
        if (subjects) {
            return res.json(subjects);
        } else {
            res.json({});
        }
    },
  async createSubject(req, res) {
    const {
      title,
      generation
    } = req.body;
    console.log(req);
    const subject = await Subject.create({
      title,
      generation
    });
    console.log(subject);
    return res.json(subject);
  },
  //get subjects according to gen
  async getSubjectsByGen(req, res) {
    const { gen } = req.params;
    const subjects = await Subject.aggregate([
      {
        $match: {
          generation: { $in: [gen] },
        },
      },
    ]);
    console.log(subjects);
    if (subjects) {
      console.log(subjects);
      return res.json(subjects);
    } else {
      res.json({ message: 'No se encontraron materias' });
    }
  },
};
