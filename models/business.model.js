require("dotenv").config();
var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  autoIncrement = require("mongoose-auto-increment");

var connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

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

businessSchema.plugin(autoIncrement.plugin, {
  model: "Business",
  field: "id",
  startAt: 1,
});
const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
