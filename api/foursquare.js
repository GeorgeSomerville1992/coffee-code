const _ = require('lodash')
const rootUrl = 'http://localhost:5000/foursquare';

module.exports = (location) => {
  const fourSquarePromise = new Promise((resolve, reject) => {
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
      reject(() => { console.log('api error', err)})
    })
  })
  return fourSquarePromise
}
