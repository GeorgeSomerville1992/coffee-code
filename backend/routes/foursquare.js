https://api.foursquare.com/v2/venues/search?ll=40.7,-74&oauth_token=JTVVNY3NSL1H4MCZFIQQHPJELLDOMNRUYOIYBZRBQGMO2BLH&v=20160925

var express = require('express');
var router = express.Router();
var request = require('request');

var request = require("request");
var rootUrl = 'https://api.foursquare.com/v2/venues/search?'

var foursquare = require('node-foursquare-venues')('PJOVUMNXMNMSCGSYVETRKZ23WN2LUR31M0AD04AMKTJAKI5I', '3GG355R0B5D4KMH1J1UIUFXH2ZZCFH4ISOW5WTNYV11JJTDV', '20160925')


router.post('/', function(req, res) {
  var searchObj = {
    ll: '40.78,-74.11',
    query: 'coffee'
  }

  foursquare.venues.search(searchObj, function(error, resp) {
    console.log('resp',resp, 'error', error)
    res.send(resp);
  })
})

/* for testing purposes */
router.get('/', function(req, res) {
  var searchObj = {
    ll: '40.78,-74.11',
    query: 'coffee'
  }

  foursquare.venues.search(searchObj, function(error, resp) {
    console.log('resp',resp, 'error', error)
    response = JSON.stringify(resp);

    res.send(response);
  })
})

module.exports = router;
