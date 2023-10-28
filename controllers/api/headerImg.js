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
    const headerImg = HeaderImg.findOne({});
    if (req.files['desktop']) {
      const desktopUrl = await uploadFile(req.files['desktop'][0]);
      headerImg[page].splice(0,1, desktopUrl);
    };
    if (req.files['mobile']) {
      const mobileUrl = await uploadFile(req.files['mobile'][0]);
      headerImg[page].splice(1,1, mobileUrl);
    };
    await headerImg.save();
    res.json(headerImg);
  } catch (err) {
    console.log(err);
  }
}