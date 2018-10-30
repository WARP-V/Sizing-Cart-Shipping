const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getSizes = require('../database/sizesanddescription.js').getSizes;
const getDescription = require('../database/sizesanddescription.js').getDescription;

app.use(express.static(__dirname + '../client/dist'));
app.use(bodyParser.json());


app.get('/sizes/:shoeID', (req, res) => {
  const { shoeID } = req.params;
  getSizes(shoeID, (error, sizes) => {
    if(error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200).send(sizes).end();
    }
  });
}); 

module.exports = app;