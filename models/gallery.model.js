  
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
   
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['all', 'garden', 'factory', 'office'],
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = mongoose.model('Gallery', imageSchema);

module.exports = Gallery;

