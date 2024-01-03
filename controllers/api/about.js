const { AbortMultipartUploadCommand } = require('@aws-sdk/client-s3');
const uploadFile = require('../../config/upload-file');
const About = require('../../models/about');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const about = await About.findOne({});
    res.json(about);
  } catch (err) {
    console.log('err');
  }
}

async function update(req, res) {
  try {
    const about = await About.findOne({});
    about.intro = req.body.intro;
    about.text = req.body.text;
    if (req.files['img']) about.img = await uploadFile(req.files['img'][0]);
    if (req.files['carousel']) {
      const carouselIndices = JSON.parse(req.body.carouselIndices);
      const carouselURLs = await Promise.all(req.files['carousel'].map(async (p) => {
        return await uploadFile(p);
      }));
      carouselURLs.forEach(function(url, i) {
        about.carousel.splice(carouselIndices[i], 1, url);
      });
    };
    await about.save();
    res.json(about);
  } catch (err) {
    res.json(err);
  }
}