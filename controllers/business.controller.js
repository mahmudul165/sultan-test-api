 const { v4: uuidv4 } = require("uuid");

const Business = require('../models/business.model');

// CREATE a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Business({
      //  id: uuidv4(),
      title: req.body.title,
      image: req.body.image,
      body: req.body.body
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Business.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ one post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Business.findById(req.params.id);
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
    const post = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const post = await Business.findByIdAndDelete(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};