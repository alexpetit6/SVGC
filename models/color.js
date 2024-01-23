const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  primary: String,
  secondary: String,
  accent: String,
  background: String,
}, { 
  toJSON: {virtuals: true}
});

colorSchema.virtual('text').get(function() {
  const background = this.background;
  const channels = {
    r: parseInt(background.slice(1,3), 16),
    g: parseInt(background.slice(3,5), 16),
    b: parseInt(background.slice(5,7), 16),
  };
  const {r, g, b} = channels;
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (brightness > 0.5) return 'black';
  else return 'white';
});

module.exports = mongoose.model('Color', colorSchema);