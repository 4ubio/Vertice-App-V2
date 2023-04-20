require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT ? process.env.PORT : 8080;

try {
  mongoose.connect(
    `mongodb+srv://admin:AveGBspRclOLC4ih@verticedb.uymzx.mongodb.net/VerticeDB?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log('CONNECTION!');
  
} catch (error) {
  console.log(error);
}

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
