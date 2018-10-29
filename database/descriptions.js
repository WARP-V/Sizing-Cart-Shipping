const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.js');

let descriptionSchema = new Schema({
  shoeId: {type: Number, unique: true},
  description: String,
  style: Number,
  shown: String,
});


const DescriptionCollection = mongoose.model('Description', descriptionSchema);

module.exports = DescriptionCollection;