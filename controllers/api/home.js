const uploadFile = require('../../config/upload-file');
const Home = require('../../models/home');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const home = await Home.findOne({});
    res.json(home);
  } catch (err) {
    console.log('err');
  }
}

async function update(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const home = await Home.findOneAndUpdate({}, req.body, {new: true});
    if (req.files['headerImg']) home.headerImg = await uploadFile(req.files['headerImg'][0]);
    if (req.files['img1']) home.img1 = await uploadFile(req.files['img1'][0]);
    if (req.files['img2']) home.img2 = await uploadFile(req.files['img2'][0]);
    await home.save();
    console.log(home);
    res.json(home);
  } catch (err) {
    res.json(err);
  }
}