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
    switch(searchApi) {
      case 'foursquare':
        normalizeFoursquare(venue, venueHash);
        break;
      case 'yelp':
        normalizeYelp(venue, venueHash);
        break;
      case 'googlePlaces':
        console.log('GooglePlaces =======>', venue)
        normalizeGooglePlaces(venue, venueHash);
        break;
    }
    dataHash.push(venueHash);
  })

  console.log('do the data', dataHash);

  function normalizeFoursquare(data, venueHash) {
    venueHash.locationCoords.latitude = data.location.lat;
    venueHash.locationCoords.longitude = data.location.lng;
    venueHash.displayLocation = data.location.formattedAddress[0] + data.location.formattedAddress[1]
    venueHash.images = null;
    venueHash.categories = data.categories[0].name;
    return venueHash;
  }

  function normalizeGooglePlaces(data, venueHash) {
    venueHash.locationCoords.latitude = data.geometry.location.lat;
    venueHash.locationCoords.longitude = data.geometry.location.lng;
    venueHash.displayLocation = data.vicinity;
    venueHash.images = null;
    venueHash.categories = data.types[0];
    venueHash.rating = data.rating;
    venueHash.open = data.opening_hours.open_now;
    return venueHash;
  }

  function normalizeYelp(data, venueHash) {
    venueHash.locationCoords.latitude = data.location.coordinate.latitude;
    venueHash.locationCoords.longitude = data.location.coordinate.longitude;
    venueHash.displayAddress = data.location.display_address[0] + data.location.display_address[1];
    venueHash.images = null;
    venueHash.rating = data.rating;
    venueHash.open = !venueHash.is_closed;
    console.log('length', data.categories, data.categories.length)

    // if(data.categories.length) {
    //   console.log('there is length ===>', data.categories[1])
    //   console.log(data.categories[1][0])
    // }
    venueHash.categories = data.categories[0][0]
    // fix below need to find away to concat the stuff to gether..
      // venueHash.categories = data.categories[0][0] + data.categories.length > 1 ? data.categories[1][0] : ''
    //   categories:
    //  [ [ 'Patisserie/Cake Shop', 'cakeshop' ],
    //    [ 'Coffee & Tea', 'coffee' ] ],

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
