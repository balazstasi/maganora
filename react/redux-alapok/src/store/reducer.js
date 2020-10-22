import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  prevActions: [],
};

const reducer = (state = initialState, action) => {
  // if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1,
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1,
  //   };
  // }
  // if (action.type === "ADD") {
  //   return {
  //     counter: state.counter + action.payload.value,
  //   };
  // }
  // if (action.type === "SUBTRACT") {
  //   return {
  //     counter: state.counter - action.payload.value,
  //   };
  // }
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
        counter: state.counter + action.payload.value,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
  }
  return state;
};

export default reducer;
