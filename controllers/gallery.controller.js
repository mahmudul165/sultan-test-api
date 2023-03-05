const { v4: uuidv4 } = require("uuid");

const Gallery = require("../models/gallery.model");

exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getOneGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findOne({ id: req.params.id });
    res.status(200).json(gallery);
  } catch (error) {                                                                
    res.status(500).send(error.message);
  }
};

exports.createGallery = async (req, res) => {
  try {
    // const { id, url, category } = req.body;
    // const newGallery = new Gallery({ id, url, category });
    const newGallery = new Gallery({
      id: uuidv4(),
      url: req.body.url,
      category: req.body.category,
    });
    await newGallery.save();
    res.status(201).json(newGallery);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateGallery = async (req, res) => {
  try {
    const user = await Gallery.findOne({ id: req.params.id });
    gallery.url = req.body.url;
    gallery.category = req.body.category;
    await gallery.save();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteGallery = async (req, res) => {
  try {
    await Gallery.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


