export default (state = null, action) => {
  switch(action.type) {
    case 'get_yelp':
      return action.payload;
    case 'get_yelp_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
