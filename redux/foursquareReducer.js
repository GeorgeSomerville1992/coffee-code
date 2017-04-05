export default (state = null, action) => {
  switch(action.type) {
    case 'get_foursquare':
      return action.payload;
    case 'get_foursquare_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
