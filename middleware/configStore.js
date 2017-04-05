import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import middleware  from './thunk'

import reducers from '../redux'

export default function configureStore() {
  const store = createStore(reducers, compose, applyMiddleware(middleware))
  return store
}

// export default compose(applyMiddleware(thunk))(createStore)(duedates);
