const _ = require('lodash')
const rootUrl = 'http://localhost:5000/yelp';

const kelvinToC = (kelvin) => {
  return Math.round((kelvin-273.15))
}

module.exports = (location) => {
  const yelpPromise = new Promise((resolve, reject) => {
    return fetch(rootUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: location
    })
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(err => {
      reject(() => console.log('api error', err))
    })
  })
  return yelpPromise
}
