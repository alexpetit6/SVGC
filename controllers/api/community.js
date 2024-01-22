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
  try {
    const community = await Community.findOne({});
    for (let key in req.body) {
      community[key] = req.body[key]
    };
    if (req.files['img1']) community.img1 = await uploadFile(req.files['img1'][0]);
    if (req.files['img2']) community.img2 = await uploadFile(req.files['img2'][0]);
    await community.save();
    res.json(community);
  } catch (err) {
    res.json(err);
  }
}