const uploadFile = require('../../config/upload-file');
const Post = require('../../models/post');

module.exports = {
  index,
  show,
  // create,
  // delete: deletePost,
  // update
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