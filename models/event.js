const mongoose = require('mongoose');
const { eventNames } = require('./user');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    default: 'Meeting',
    required: true
  },
  description: String,
  photo: String,
  location: {
    type: String,
    default: '9050 384th Ave SE, Snoqualmie, WA 98065',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

eventSchema.virtual('standardClock').get(function() {
  const hour = Number(this.time.slice(0, 2));
  const minute = this.time.slice(3);
  return hour > 12 ? `${hour - 12}:${minute} PM` : `${hour}:${minute} AM`
});

module.exports = mongoose.model('Event', eventSchema);