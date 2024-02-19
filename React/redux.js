//13 FEB

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(increment(5)); 
console.log('Count after increment:', store.getState().count);

store.dispatch(decrement(3)); 
console.log('Count after decrement:', store.getState().count);
