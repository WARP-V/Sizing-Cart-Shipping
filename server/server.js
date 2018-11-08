const app = require('./app.js');

const port = 3003;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
