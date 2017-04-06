import { combineReducers } from 'redux';
import LibaryReducer from './LibaryReducer';
import SelectionReducer from './SelectionReducer';
import foursquareVenues from './foursquareReducer';
import yelpVenues from './yelpReducer';
import googlePlacesVenues from './googlePlacesReducer';

export default combineReducers({
  libaries: LibaryReducer,
  selectedLibraryId: SelectionReducer,
  foursquareVenues: foursquareVenues,
  yelpVenues: yelpVenues,
  googlePlacesVenues: googlePlacesVenues,
})
