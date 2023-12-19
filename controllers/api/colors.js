const uploadFile = require('../../config/upload-file');
const Color = require('../../models/color');

module.exports = {
  index,
  update
};

async function index(req, res) {
  try {
    const color = await Color.findOne({});
    res.json(color);
  } catch (err) {
    console.log('err');
  }
}

async function update(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const color = await Color.findOneAndUpdate({}, req.body);
    res.json(color);
  } catch (err) {
    res.json(err);
  }
}