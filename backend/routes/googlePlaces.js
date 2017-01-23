var express = require('express');
var router = express.Router();
var request = require('request');

// var GOOGLE_PLACES_API_KEY = "your key here"
// var GOOGLE_PLACES_OUTPUT_FORMAT = "json"

var config = {
  apiKey: 'AIzaSyA41WSUbVr-eSWldT-4T3D01Uc7Al3QKtU',
  outputFormat: 'json'
}

var GooglePlaces = require('googleplaces')

var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
var parameters;

router.post('/', function(req, res) {
  /**
   * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
   */

  console.log('REQUESTION COMEING IN Google places LOCATION', Object.keys(req.body)[0])

  parameters = {
      location: Object.keys(req.body)[0],
      keyword: "coffee"
  };

  googlePlaces.placeSearch(parameters, function (error, resp) {
    if (error) throw error;
    response = JSON.stringify(resp);
    res.send(response);
  });
})

/* for testing purposes */
router.get('/', function(req, res) {
  parameters = {
      location: [-33.8670522, 151.1957362],
      types: "Coffee"
  };

  googlePlaces.placeSearch(parameters, function (error, resp) {
    if (error) throw error;
    response = JSON.stringify(resp);
    res.send(response);
  });
})

module.exports = router;
