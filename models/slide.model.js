const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,'Must need image title'],
    
  },
  image: {
    type: String,
    required: [true,'Must need image url'],
    // unique: true,
  },
  altText: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  pathName: {
    type: String,
    required: [true,'Must need unique path name'],
    unique: true,

  }
});

const Slide = mongoose.model('Slide', slideSchema);

module.exports = Slide;
