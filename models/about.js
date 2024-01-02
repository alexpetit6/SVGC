const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  text: String,
  img: String,
  carousel: Array,
});

module.exports = mongoose.model('About', aboutSchema);