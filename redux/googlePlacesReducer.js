export default (state = null, action) => {
  switch(action.type) {
    case 'get_google_places':
      return action.payload;
    case 'get_google_places_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
