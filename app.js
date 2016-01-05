var express = require('express');
var app = express();

var development = process.env.NODE_ENV !== 'production';
if (development) { require('./env.js'); }

app.locals.DEFAULT_LOCALITY = 'sf';
app.locals.screenNames = {
  sf: 'onewordsfwthr'
};

var defaultLocality = function(req, res, next) {
  if (!req.params.locality) {
    req.params.locality = app.locals.DEFAULT_LOCALITY;
  }
  next();
}

app.get('/word/:locality?', defaultLocality, function(req, res) {
  if (app.locals.screenNames[req.params.locality] !== undefined) {
    req.screenName = app.locals.screenNames[req.params.locality];
    var options = { screenName: req.screenName };
    var timeline = require('./timeline')(options);
    var error = function(err) { res.sendStatus(503); }
    var success = function(result) {
      res.type('text/plain').send(result);
    }
    timeline.mostRecent(error, success)
  }
  else {
    res.sendStatus(404);
  }
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API app listening at http://%s:%s', host, port);
});
