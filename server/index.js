const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '../client/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
}); 

app.listen(port, () => console.log(`app is listening on port ${port}`));