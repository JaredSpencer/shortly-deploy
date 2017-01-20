var mongoose = require('mongoose');
//mongoose.connect('mongodb://root@138.197.212.189:4568/root/shortlydb/');
var mongoURI = 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
