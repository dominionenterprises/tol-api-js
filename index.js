var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname + "/public"));

var port = process.env.PORT ? process.env.PORT : 8000;
app.listen(port, function() { console.log('Listening on ' + port); });
