const mongoose = require('mongoose');
let mongooseURI = mongoose.connect('mongodb://localhost/jordandb');
let db = mongoose.connect(mongooseURI);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection to db has been made");
})

module.exports.db = db;
