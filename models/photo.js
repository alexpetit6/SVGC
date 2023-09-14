const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  caption: {type: String, default: ''},
  archived: {type: Boolean, default: false},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Photo', photoSchema);