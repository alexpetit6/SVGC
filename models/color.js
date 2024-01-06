const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  primary: String,
  secondary: String,
  accent: String,
  background: String,
});

module.exports = mongoose.model('Color', colorSchema);