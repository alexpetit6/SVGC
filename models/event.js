const mongoose = require('mongoose');
const dayjs = require('dayjs')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    default: 'Board Meeting',
  },
  description: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '9050 384th Ave SE, Snoqualmie, WA 98065',
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

eventSchema.virtual('formDate').get(function() {
  return this.date.toISOString().slice(0, 10)
});

eventSchema.virtual('displayDate').get(function() {
  const suffixArr = ['st', 'nd', 'rd'];
  let suffix = null;
  const newDateStr = dayjs(this.date).format('MMM. DD YYYY');
  const day = newDateStr.slice(5,7);
  if ( day > 3 ) suffix = 'th';
  else suffix = suffixArr[day - 1];
  const noZeroDate = newDateStr.replace(/ 0/, ' ');
  if ( noZeroDate.length === 11 ) return `${noZeroDate.slice(0,6)}${suffix}, ${noZeroDate.slice(7)}`
  return `${noZeroDate.slice(0,7)}${suffix}, ${noZeroDate.slice(8)}`
});

eventSchema.virtual('color').get(function() {
  return this.title === 'Board Meeting' ? 'var(--secondary-color)' : '#00E091'
});

module.exports = mongoose.model('Event', eventSchema);