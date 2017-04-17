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

// looks like I'm going to have to make my thunk here? because acitons must only be plan objects
// http://stackoverflow.com/questions/35530547/async-actions-in-redux
export const getFoursquareVenues = (payload) => {
  return {
    type: 'get_foursquare',
    promise: FourSquareApi.bind(null, payload),
    payload,
  }
}

export const getGooglePlacesVenues = (payload) => {
  return {
    type: 'get_google_places',
    promise: GooglePlacesApi.bind(null, payload),
    payload,
  }
}

export const getYelpVenues = (payload) => {
  return {
    type: 'get_yelp',
    promise: YelpApi.bind(null, payload),
    payload,
  }
}


// determine where we want to call it
// from
// need to wire up action and action CReator
