// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   id: {
//     type: String,
//     reuire: true,
//   },
//   name: {
//     type: String,
//     reuire: true,
//   },
//   age: {
//     type: Number,
//     reuire: true,
//   },
//   createdOn: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  id: {
    type: String,
    reuire: true,
  },
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

