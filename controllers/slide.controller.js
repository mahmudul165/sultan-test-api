const Slide = require('../models/slide.model');

// Controller function to get all slides
exports.getAllSlides = async (req, res) => {
  try {
    const slides = await Slide.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get a single slide by ID
exports.getSlideById = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (slide) {
      res.json(slide);
    } else {
      res.status(404).json({ message: 'Slide not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new slide
exports.createSlide = async (req, res) => {
  const slide = new Slide({
    title: req.body.title,
    image: req.body.image,
    altText: req.body.altText,
    description: req.body.description,
    pathName: req.body.pathName
  });

  try {
    const newSlide = await slide.save();
    res.status(201).json(newSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to update a slide by ID
exports.updateSlide = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (slide) {
      slide.title = req.body.title || slide.title;
      slide.image = req.body.image || slide.image;
      slide.altText = req.body.altText || slide.altText;
      slide.description = req.body.description || slide.description;
      slide.pathName = req.body.pathName || slide.pathName;

      const updatedSlide = await slide.save();
      res.json(updatedSlide);
    } else {
      res.status(404).json({ message: 'Slide not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to delete a slide by ID
exports.deleteSlide = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (slide) {
      await slide.remove();
      res.json({ message: 'Slide deleted' });
    } else {
      res.status(404).json({ message: 'Slide not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
