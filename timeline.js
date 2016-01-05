var Twitter = require('twitter-node-client').Twitter;

var config = {
  "consumerKey":        process.env['CONSUMER_KEY'],
  "consumerSecret":     process.env['CONSUMER_SECRET'],
  "accessToken":        process.env['ACCESS_TOKEN_KEY'],
  "accessTokenSecret":  process.env['ACCESS_TOKEN_SECRET']
};
var twitter = new Twitter(config);

var timeline = function(options) {
  return {
    mostRecent: function(error, success) {
      var error = function(data) {

      }
      var twitterOpts = {screen_name: options.screenName, count: '1'};
      twitter.getUserTimeline(twitterOpts,
        function(err)  {
          error(err);
        },
        function(json) {
          var tweets = JSON.parse(json);
          success(tweets[0].text);
        }
      );
    }
  }
};

module.exports = timeline;
