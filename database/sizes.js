const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = require('./index.jsx');
mongoose.promise = global.Promise;

let sizingSchema = new Schema({
  shoeId: {type: Number, unique: true},
  sizes: [Number]
});


let Size = mongoose.model('Size', sizingSchema);

module.exports.Size = Size;