import { combineReducers } from 'redux';
import LibaryReducer from './LibaryReducer';
import SelectionReducer from './SelectionReducer';
import foursquareVenues from './foursquareReducer';

export default combineReducers({
  libaries: LibaryReducer,
  selectedLibraryId: SelectionReducer,
  foursquareVenues: foursquareVenues,
})
