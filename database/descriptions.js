const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.js').db;
mongoose.promise = global.Promise;

let descriptionSchema = new Schema({
  shoeId: {type: Number, unique: true},
  description: String,
  style: Number,
  shown: String,
});


const Description = mongoose.model('Description', descriptionSchema);

module.exports.Description = Description;