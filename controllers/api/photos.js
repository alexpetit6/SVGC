const uploadFile = require('../../config/upload-file');
const Photo = require('../../models/photo');

module.exports = {
  index,
  upload,
  delete: deletePhoto,
  archive
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  console.log(req.body)
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        caption: req.body.caption
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

async function archive(req, res) {
  try {
    const photo = await Photo.findById(req.params.id);
    photo.archived = true;
    photo.save();
    const photos = await Photo.find({}).sort('-createdAt').exec();
    res.json(photos)
  } catch (err) {
    res.json(err);
  }
}
