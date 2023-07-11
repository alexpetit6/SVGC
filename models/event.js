const mongoose = require('mongoose');
const { eventNames } = require('./user');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  photo: [String],
  location: {
    type: String,
    default: '9050 384th Ave SE, Snoqualmie, WA 98065',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)