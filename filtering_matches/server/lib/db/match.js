const mongoose = require('mongoose');

const Match = new mongoose.Schema({
  id: Number,
  display_name: String,
  age: String,
});

module.exports = mongoose.model('Match', Match);
