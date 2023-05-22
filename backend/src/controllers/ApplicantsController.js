const Applicant = require('../models/Applicant');

module.exports = {
    async getAllApplicants(req, res) {
      const applicants = await Applicant.aggregate([
        { $match: { _id: { $exists: true } } },
        { $sort: { idIest: -1 } },
      ]);
      if (applicants) {
        return res.json(applicants);
      } else {
        res.json({});
      }
    },
    async createApplicant(req, res) {
      const { name, lastNames, idIest, email, gen, bachelor} =
        req.body;
      console.log(req);
      const applicant = await Applicant.create({
        name,
        lastNames,
        idIest,
        email,
        gen,
        bachelor
      });
      console.log(applicant);
      return res.json(applicant);
    },
    async getApplicantByEmail(req, res) {
      const { email } = req.params;
      console.log(email);
      const applicant = await Applicant.find({ email: email });
      //si el correo no es parte de vertice
      if (applicant.length === 0) {
        return res.json({ message: 'No es aplicante' });
      } else {
        return res.json({ message: 'Es aplicante', applicant: applicant });
      }
    },
}