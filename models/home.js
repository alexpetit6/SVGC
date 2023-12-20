const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  brand: String,
  imgText1: String,
  img1: String,
  imgText2: String,
  img2: String,
});

module.exports = mongoose.model('Home', homeSchema);