const uploadFile = require('../../config/upload-file');
const Post = require('../../models/post');

module.exports = {
  index,
  show,
  create,
  delete: deletePost,
  update
};

async function index(req, res) {
  const posts = await Post.find({}).sort('date').exec();
  console.log('index')
  res.json(posts);
}

async function show(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    console.log('show', req.params.id)
    res.json(post);
  } catch (err) {
    console.log('err')
  }
}

async function create(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const headerPhotoURL = await uploadFile(req.files['header'][0]);
    const post = await Post.create({
      title: req.body.title,
      headerPhoto: headerPhotoURL,
      body: req.body.body,
    });
    if (req.files['gallery']) {
      const galleryURLs = await Promise.all(req.files['gallery'].map(async (p) => {
        return await uploadFile(p);
      }));
      post.gallery = galleryURLs;
      await post.save();
    };
    res.json(post);
  } catch (err) {
    console.log(err)
  }
}

async function deletePost(req, res) {
  try {
    await Post.deleteOne({_id: req.params.id});
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
}

async function update(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const updatedPost = await Post.findOneAndUpdate(
      {_id: req.params.id},
      {
        title: req.body.title,
        body: req.body.body,
      },
      {new: true}
    );
    if (req.files['header']) {
      const headerPhotoURL = await uploadFile(req.files['header'][0]);
      updatedPost.headerPhoto = headerPhotoURL;
    };
    if (req.files['gallery']) {
      if (updatedPost.gallery.length) {
        const galleryIndices = JSON.parse(req.body.galleryIndices);
        const newGalleryURLs = await Promise.all(req.files['gallery'].map(async (p) => {
          return await uploadFile(p);
        }));
        newGalleryURLs.forEach(function(url, i) {
          updatedPost.gallery.splice(galleryIndices[i], 1, url);
        })
      } else {
        const newGalleryURLs = await Promise.all(req.files['gallery'].map(async (p) => {
          return await uploadFile(p);
        }));
        updatedPost.gallery = newGalleryURLs;
      };
    };
    updatedPost.save();
    res.json(updatedPost);
  } catch (err) {
    console.log(err);
  }
}