const Product = require('../models/product.model');

// Create a new product
const createProduct = async (req, res) => {
  try {

    
  //   const lastPost = await Product.findOne({}, {}, { sort: { id: -1 } });
     
  // const newId = lastPost ? lastPost.id + 1 : 1;
  // req.body.id = nextId;
  const product = new Product(req.body); 
    console.log('product req boday',req.body)
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
 
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({status:'success',products});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    Object.assign(product, req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
