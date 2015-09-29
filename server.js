var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/beverages_test');

app.use(express.static(__dirname + '/build'));
var router = require('./routes/routes');
app.use('/api', router);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server up on port: ' + port);
});
