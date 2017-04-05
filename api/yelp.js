const _ = require('lodash')
const rootUrl = 'http://localhost:5000/yelp';

const kelvinToC = (kelvin) => {
  return Math.round((kelvin-273.15))
}

module.exports = (location) => {
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
    console.log('api error', err)
  })
}
