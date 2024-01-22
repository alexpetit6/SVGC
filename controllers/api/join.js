const Join = require('../../models/join');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const join = await Join.findOne({});
    res.json(join);
  } catch (err) {
    console.log('err')
  }
}

async function update(req, res) {
  try {
    const join = await Join.findOneAndUpdate({}, req.body, {new: true});
    res.json(join);
  } catch (err) {
    res.json(err);
  }
}