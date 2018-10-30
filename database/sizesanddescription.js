const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.js');

let sizesAndDescriptionSchema = new Schema({
  shoeId: {type: String},
  sizes: [Number],
  style: String,
  description: String,
  shown: String,
});


const SizesAndDescription = mongoose.model('SizesAndDescription', sizesAndDescriptionSchema);

module.exports = SizesAndDescription;