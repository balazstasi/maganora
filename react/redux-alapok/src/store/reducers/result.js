/* eslint-disable default-case */
import * as actionTypes from "../actions/actions";

const initialState = {
  results: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // results: state.results.concat({ id: new Date, value: action.result })
        results: [...state.results, { id: new Date(), value: action.result }],
      };
    case actionTypes.DELETE_RESUlT:
      // const id = action.resultId;
      // const newResults = [...state.results];
      // newResults.splice(id, 1);
      return {
        ...state,
        results: state.results.filter(
          (result) => result.id !== action.resultId
        ),
      };
  }
  return state;
};

export default resultsReducer;
