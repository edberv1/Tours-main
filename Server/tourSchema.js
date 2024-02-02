const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  id: Number,
  image: String,
  info: String,
  name: String,
  price: Number
});

module.exports = mongoose.model('Tour', tourSchema);