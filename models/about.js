const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  intro: String,
  text: String,
  img: String,
});

module.exports = mongoose.model('About', aboutSchema);