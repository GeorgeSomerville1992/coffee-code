const _ = require('lodash')
const rootUrl = 'http://localhost:5000/foursquare';

module.exports = (location) => {

  // annoying thing with fetch...
  // call json then use response after that

  return fetch(rootUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: location
  })
  .then(response => response.json())
  .then(json => json)
  .catch(err => {
    console.log('george fucked up', err)
  })
}
