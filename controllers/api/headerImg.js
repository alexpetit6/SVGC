const uploadFile = require('../../config/upload-file');
const HeaderImg = require('../../models/headerImg');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const headerImg = await HeaderImg.findOne({});
    res.json(headerImg);
  } catch (err) {
    console.log(err)
  }
}

async function update(req, res) {
  try {
    const page = req.body.page;
    console.log(page)
    const type = req.body.type;
    console.log(type)
    const headerImg = await HeaderImg.findOne({});
    const photoUrl = await uploadFile(req.file);
    console.log(photoUrl)
    console.log(headerImg[page])
    type === 'desktop' ? headerImg[page].splice(0,1, photoUrl) : headerImg[page].splice(1,1, photoUrl);
    await headerImg.save();
    res.json(headerImg);
  } catch (err) {
    console.log(err, 'error');
  }
}