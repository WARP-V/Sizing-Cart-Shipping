const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.js');

let sizingSchema = new Schema({
  shoeId: {type: String, unique: true},
  sizes: [Number]
});


const SizeCollection = mongoose.model('SizeCollection', sizingSchema);

module.exports = SizeCollection;