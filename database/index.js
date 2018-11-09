const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.2/airjordan';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports = db;