const uploadFile = require('../../config/upload-file');
const photo = require('../../models/photo');
const Photo = require('../../models/photo');

module.exports = {
  index,
  upload,
  delete: deletePhoto
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      console.log('uploading', req.file);
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        title: req.body.title
      });
      res.json(photoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function deletePhoto(req, res) {
  try {
    await Photo.deleteOne({_id: req.params.id});
    const photos = await Photo.find({}).sort('-createdAt').exec();
    res.json(photos)
  } catch (err) {
    res.json(err);
  }
}
