var express = require('express');
var router = express.Router();
var request = require('request');

var yelp = require("node-yelp");
var normalize = require('../utils/normalize-venue-data')

var client = yelp.createClient({
  oauth: {
    "consumer_key": "P7_cdbPT5-wPbBA3qqeuaw",
    "consumer_secret": "R8TM_c64tBrvZsG8hgzuTQkf89U",
    "token": "Oh9x9Sa4UwTDE2NYtBTYyMQ7o4HoZosO",
    "token_secret": "UFG_YD5rtQAr9ZkA5jTD6s_NB00"
  },

  // Optional settings:
  httpClient: {
    maxSockets: 25  // ~> Default is 10
  }
});
// hsould geocode where you are really..
router.post('/', function(req, res, next) {
  client.search({
    term: "Coffee",
    ll: Object.keys(req.body)[0]
  }).then(function (data) {
    var businesses = data.businesses;
    var location = data.region;
    var normalizedData = normalize(businesses, 'yelp');
    res.send(normalizedData)
  });
});



/* for testing purposes */
router.get('/', function(req, res, next) {
  // this will get the  jobs id
  client.search({
    terms: "coffee",
    location: "London"
  }).then(function (data) {
    var businesses = data.businesses;
    var location = data.region;
    res.send({businesses: businesses})
  });
})

module.exports = router;
// now we can run our routes, serve up and send shit bakc
