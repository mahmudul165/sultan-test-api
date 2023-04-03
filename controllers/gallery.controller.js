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
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createGallery = async (req, res) => {
  try {
    const newGallery = new Gallery({
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
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }

    // Only update the fields that are included in the request body
    if (req.body.url) {
      gallery.url = req.body.url;
    }
    if (req.body.category) {
      gallery.category = req.body.category;
    }

    await gallery.save();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    await Gallery.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
