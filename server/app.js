const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const getSizes = require('../database/sizesanddescription.js').getSizes;
const getDescription = require('../database/sizesanddescription.js').getDescription;


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


app.get('/sizes/:shoeId', (req, res) => {
  console.log(req.params);
  let { shoeId } = req.params;
  getSizes(shoeId, (error, sizes) => {
    console.log(sizes);
    if(error) {
      res.sendStatus(500);
    } else {
      res.send(sizes);
    }
  });
}); 

app.get('/description/:shoeId', (req, res) => {
  let { shoeId } = req.params;
  getDescription(shoeId, (error, description) => {
    if(error) {
      res.sendStatus(500);
    } else {
      res.send(description);
    }
  });
}); 

module.exports = app;