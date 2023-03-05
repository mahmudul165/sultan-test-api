const mongoose = require('mongoose');

const superadminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Superadmin = mongoose.model('Superadmin', superadminSchema);

module.exports = Superadmin;
