const _ = require('lodash')
const rootUrl = 'http://localhost:5000/yelp';

const kelvinToC = (kelvin) => {
  return Math.round((kelvin-273.15))
}

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









// module.exports = () => {
//   var httpMethod = 'GET',
//     url = 'http://photos.example.net/photos',
//     parameters = {
//         oauth_consumer_key : 'P7_cdbPT5-wPbBA3qqeuaw',
//         oauth_token : 'hqoL4LHddkcEFp76V9ccQ_dAeDlswdzD',
//         oauth_timestamp : '1191242096',
//         oauth_signature_method : 'HMAC-SHA1',
//         oauth_version : '1.0',
//         file : 'vacation.jpg',
//         size : 'original'
//     },
//     consumerSecret = 'R8TM_c64tBrvZsG8hgzuTQkf89U',
//     tokenSecret = 'Q_-oDPl4A7k7Cfz19fb366HeIhc',
//     // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
//     encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret),
//     // generates a BASE64 encode HMAC-SHA1 hash
//     signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
//         { encodeSignature: false});
//   return {
//     test: encoded,
//     signature
//   }
//   alert('dedumddum', tokenSecret, encodeSignature);
// }

// // Consumer Key  P7_cdbPT5-wPbBA3qqeuaw
// // Consumer Secret R8TM_c64tBrvZsG8hgzuTQkf89U
// // Token hqoL4LHddkcEFp76V9ccQ_dAeDlswdzD
// // Token Secret  Q_-oDPl4A7k7Cfz19fb366HeIhc
// // oauth_signature_method  hmac-sha1


// Replace url with the uri-js to support react native


// function yelp(location) {
//   return Fetch
//   // put headers and shiti nhere
//   // add in fetch, seebelow
// }

// export default yelp

// const authManager = new OAuthManager()
// authManager.configureProvider("twitter", {
//   consumer_key: 'SOME_CONSUMER_KEY',
//   consumer_secret: 'SOME_CONSUMER_SECRET'
// });

// const appUrl = 'app-uri://oauth-callback/twitter'
// authManager.authorizeWithCallbackURL('twitter', appUrl)

// // put this in place or just do it manually!!!
// .then((resp) => {
//   // We have a user with user credentials
//   authManager.makeRequest('twitter', 'get', 'https://api.twitter.com/1.1/statuses/mentions_timeline.json')
//     .then((stringResponse) => {
//       console.log('RESPONSE as a string: ', stringResponse);
//     })
//     .catch((err) => {
//       console.log('Error making request', err);
//     })
// })



// // copy this...
// // const _ = require('lodash')
// // const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=b049ab08f72b59028ca8f9ee839d3611';

// const kelvinToC = (kelvin) => {
//   return Math.round((kelvin-273.15))
// }
