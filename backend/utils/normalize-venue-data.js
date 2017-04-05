normalizeVenueData = function(data, searchApi) {
  // pass in array of data

  var dataHash = []
  data.map(function(venue){
    var venueHash = {
      name: venue.name,
      locationCoords: {
        latitude: '',
        longitude: ''
      },
      images: ''
    }
    console.log('SEARCH API', searchApi)
    switch(searchApi) {
      case 'foursquare':
        normalizeFoursquare(venue, venueHash);
        break;
      case 'yelp':
        normalizeYelp(venue, venueHash);
        break;
      case 'googlePlaces':
        console.log('googleplaces =======>')
        normalizeGooglePlaces(venue, venueHash);
        break;
    }
    dataHash.push(venueHash);
    console.log('the venue hash', venueHash);
  })

  console.log('do the data', dataHash);

  function normalizeFoursquare(data, venueHash) {
    venueHash.locationCoords.latitude = data.location.lat;
    venueHash.locationCoords.longitude = data.location.lng;
    venueHash.images = null;
    return venueHash;
  }

  function normalizeGooglePlaces(data, venueHash) {
    venueHash.locationCoords.latitude = data.geometry.location.lat;
    venueHash.locationCoords.longitude = data.geometry.location.lng;
    venueHash.images = null;
    return venueHash;
  }

  function normalizeYelp(data, venueHash) {
    venueHash.locationCoords.latitude = data.location.coordinate.latitude;
    venueHash.locationCoords.longitude = data.location.coordinate.longitude;
    venueHash.images = null;
    return venueHash;
  }
 return dataHash;
 // recusion - one long recusive function which goes through entire layout, include if statments
 // to detect each property and do this like a promise
 // also a util function to remove duplicates... like filter orsomething
 // and finally put this all into a promise...
 // see that recusive example for more info...
}

module.exports = normalizeVenueData
