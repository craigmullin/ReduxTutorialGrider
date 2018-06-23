// State argument is not app state but only the state
// this reducer is responsible for
export default function(state = null, action) {
  // if state is undefined, set to null
  switch(action.type) {

    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}

// When app first loads there is no state
// Need to add default value