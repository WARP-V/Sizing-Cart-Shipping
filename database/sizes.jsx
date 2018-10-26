const mongoose = require('mongoose');
const db = require('./index.js').db;
mongoose.promise = global.Promise;

let sizingSchema = new Schema({
  shoeId: {type: Number, unique: true},
  sizes: [Number]
});


let Size = mongoose.model('Size', sizingSchema);

module.exports.Size = Size;