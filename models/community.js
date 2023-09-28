const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  intro: {type: String, required: true},
  body1: {type: String, required: true},
  img1: {type: String, required: true},
  body2: {type: String, required: true},
  img2: {type: String, required: true},
  outro: {type: String, required: true},
});

module.exports = mongoose.model('Community', communitySchema);