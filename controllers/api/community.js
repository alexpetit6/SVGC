const uploadFile = require('../../config/upload-file');
const Community = require('../../models/community');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const community = await Community.findOne({});
    res.json(community);
  } catch (err) {
    console.log('err')
  }
}

async function update(req, res) {
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // };
  try {
    const community = await Community.findOne({});
    req.body.forEach(el => community[el] = el);
    if (req.files['firstImg']) community.img1 = req.files['firstImg'][0];
    if (req.files['secondImg']) community.img2 = req.files['secondImg'][0];
    await community.save();
    res.json(community);
  } catch (err) {
    res.json(err);
  }
}