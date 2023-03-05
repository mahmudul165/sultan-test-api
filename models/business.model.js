require("dotenv").config();
const mongoose = require("mongoose");
 
//   autoIncrement = require("mongoose-auto-increment");

// var connection = mongoose.createConnection(process.env.DB_URL);

// autoIncrement.initialize(connection);

const businessSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

// businessSchema.plugin(autoIncrement.plugin, {
//   model: "Business",
//   field: "id",
//   startAt: 1,
// });
const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
