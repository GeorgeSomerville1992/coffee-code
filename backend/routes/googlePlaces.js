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
  parameters = {
      location: [-33.8670522, 151.1957362],
      types: "doctor"
  };

  googlePlaces.placeSearch(parameters, function (error, response) {
      if (error) throw error;
      console.log('THE RESPONSE FROM GOOGLE PLACES', response);
  });
})

/* for testing purposes */
router.get('/', function(req, res) {
  parameters = {
      location: [-33.8670522, 151.1957362],
      types: "doctor"
  };

  googlePlaces.placeSearch(parameters, function (error, response) {
      if (error) throw error;
      console.log('THE RESPONSE FROM GOOGLE PLACES', response);
      res.send(response);
  });
})

module.exports = router;

