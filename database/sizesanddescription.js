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

const getSizes = (shoeID, callback) => {
  SizesAndDescription.find({ shoeID }, (error, documents) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, documents);
    }
  });
};

const getDescription = (shoeID, callback) => {
  SizesAndDescription.find({ shoeID }, (error, documents) => {
    if(error) {
      return callback(error, null);
    } else {
      callback(null, documents);
    }
  });
}


module.exports.getSizes = getSizes;
module.exports.getDescription = getDescription;