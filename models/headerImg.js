const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headerImgSchema = new Schema({
  eventFeed: Array,
  blog: Array,
  gallery: Array,
  membership: Array,
  community: Array,
  scholarships: Array
});

module.exports = mongoose.model('HeaderImg', headerImgSchema);