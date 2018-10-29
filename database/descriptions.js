const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.js');

let descriptionSchema = new Schema({
  shoeId: {type: String},
  description: String,
  style: Number,
  shown: String,
});


const DescriptionCollection = mongoose.model('DescriptionCollection', descriptionSchema);

module.exports = DescriptionCollection;