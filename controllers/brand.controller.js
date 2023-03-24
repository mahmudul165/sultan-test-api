 const { v4: uuidv4 } = require("uuid");
const Brand = require('../models/brand.model');
// CREATE a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Brand(req.body);    
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// READ all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Brand.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// READ one post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Brand.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE one post by ID
exports.updatePost = async (req, res) => {
  try {
    const post = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE one post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Brand.findByIdAndDelete(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};