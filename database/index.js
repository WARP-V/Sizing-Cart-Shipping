const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jordandb');
let db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection to db has been made");
})

let sizingSchema = new Schema({
  shoeId: {type: Number, unique: true},
  sizes: [Number]
});

let descriptionSchema = new Schema({
  shoeId: {type: Number, unique: true},
  description: String,
  style: Number,
  shown: String,
});

var Size = mongoose.model('Size', sizingSchema);
var Description = mongoose.model('Description', descriptionSchema);

var newSize = new Size(sizeData);
newSize.insertMany(function(err) {
  if(err) {
    return console.log(err);
  } else {
    
  }
})

module.exports.Size = Size;
module.exports.Description = Description;