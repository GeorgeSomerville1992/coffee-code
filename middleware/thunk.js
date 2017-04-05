export default function mddleware({ dispatch, getState }) {
  return next => action => {
    if (isFunction(action)) {
      return action({ dispatch, getState })
    } else if (isPromise(action.promise) || isFunction(action.promise)) {
      next({ type: `${action.type}_STARTED`, payload: action.payload })
      return (isPromise(action.promise) ? action.promise : action.promise())
        .then(
          payload => {
            const newPayload = {
              payload: action.transform ? action.transform(payload) : payload,
              type: `${action.type}_SUCCESS`,
              initialPayload: action.payload,
            }
            next(newPayload)

            return newPayload
          },

          error => {
            const newPayload = {
              error,
              type: `${action.type}_FAILED`,
              initialPayload: action.payload,
            }
            next(newPayload)

            return newPayload
          })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error('middleware error, ', error)
          next({ error, type: `${action.type}_ERROR` })
          throw error;
        })
    }

    return next(action)
  }
}

function isPromise(action) {
  return action && typeof action.then === 'function';
}

function isFunction(action) {
  return typeof action === 'function'
}
