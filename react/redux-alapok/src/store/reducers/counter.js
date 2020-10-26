import * as actionTypes from "../actions/actions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // lemasoljuk a state a newState valtozoba
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }
  return state;
};

export default counterReducer;
