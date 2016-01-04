var express = require('express');
var app = express();

app.get('/weather', function(req, res) {
  res.send('hello weather');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API app listening at http://%s:%s', host, port);
});
