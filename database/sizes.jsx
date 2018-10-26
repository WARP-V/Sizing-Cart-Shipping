const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.jsx');
mongoose.promise = global.Promise;

let sizingSchema = new Schema({
  shoeId: {type: Number, unique: true},
  sizes: [Number]
});


const SizeCollection = mongoose.model('SizeCollection', sizingSchema);

module.exports.SizeCollection = SizeCollection;