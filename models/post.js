const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  headerPhoto: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    default: '',
  },
  gallery: {
    type: Array,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

module.exports = mongoose.model('Post', postSchema);