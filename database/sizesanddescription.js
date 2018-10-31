const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const db = require('./index.js');

let sizesAndDescriptionSchema = new Schema({
  shoeId: {type: String},
  sizes: [Number],
  style: String,
  description: String,
  shown: String,
});

const SizesAndDescription = mongoose.model('SizesAndDescription', sizesAndDescriptionSchema);

const getSizes = (shoeId, callback) => {
  SizesAndDescription.find({ shoeId }, (error, documents) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, documents[0].sizes);
    }
  });
};

const getDescription = (shoeId, callback) => {
  SizesAndDescription.find({ shoeId }, (error, documents) => {
    console.log(documents);
    if(error) {
      return callback(error, null);
    } else {
      callback(null, [documents[0].style, documents[0].shown, documents[0].description]);
    }
  });
}


module.exports.getSizes = getSizes;
module.exports.getDescription = getDescription;