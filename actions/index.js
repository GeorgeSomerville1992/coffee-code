// 1) action creators - functions which return actions
// 2) actions are objects which have types and payload
//      they tell reducers to update certain state


// the function is the action creator..

// pass the payload in
// ths will send action to reducers

import YelpApi from '../api/yelp.js'
import FourSquareApi from '../api/foursquare.js';
import GooglePlacesApi from '../api/google-places.js';

export const selectLibrary = (libraryId) => {
  console.log('firing select libaryId', libraryId)
  return {
    type: 'select_libary',
    payload: libraryId
  }
}

// need to make the api part. where it will fetch the venus
// these will then talk to the api bit
// so perhaps use a dispatcher..
// so how that works
// so like below..
// export function createItem(payload = {}) {
//   return {
//     type: actionTypes.SET_ITEM,
//     promise: Customer.items.create.bind(null, payload),
//     payload,
//   }
// }

// and we need to firgure out how to put them together as well..

// looks like I'm going to have to make my thunk here? because acitons must only be plan objects
// http://stackoverflow.com/questions/35530547/async-actions-in-redux
export const getFoursquareVenues = (payload) => {
  return {
    type: 'get_foursquare',
    promise: FourSquareApi.bind(null, payload),
    payload,
  }
}

export const getGooglePlaces = () => {

}

export const getYelp = () => {

}


// determine where we want to call it
// from
// need to wire up action and action CReator
