const _ = require('lodash')
const rootUrl = 'http://localhost:5000/googlePlaces';

const kelvinToC = (kelvin) => {
  return Math.round((kelvin-273.15))
}

module.exports = () => {

  // annoying thing with fetch...
  // call json then use response after that
  return fetch(rootUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
  .then(response => response.json())
  .then(json => json)
  .catch(err => {
    console.log('george fucked up', err)
  })
}
