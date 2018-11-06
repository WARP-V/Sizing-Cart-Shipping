const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { getSizes } = require('../database/sizesanddescription.js');
const { getDescription } = require('../database/sizesanddescription.js');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


app.get('/:shoeId/sizes', (req, res) => {
  const { shoeId } = req.params;
  getSizes(shoeId, (error, sizes) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(sizes);
    }
  });
});

app.get('/:shoeId/description', (req, res) => {
  const { shoeId } = req.params;
  getDescription(shoeId, (error, description) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(description);
    }
  });
});

module.exports = app;
