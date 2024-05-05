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

app.post('/members/bulk', async (req, res) => {
  try {
    const { members } = req.body;
    await Member.insertMany(members);
    res.status(201).send('Miembros agregados con éxito');
  } catch (error) {
    res.status(500).send('Error al agregar miembros');
  }
});


module.exports = mongoose.model('Member', MemberSchema);
