const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  photo: String,
  location: {
    type: String,
    // default: 'Club Address',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
}, {
  timestamps: true
})