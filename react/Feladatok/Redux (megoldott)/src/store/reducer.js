// import * as actionTypes from "./actions";
import { ADD_PERSON, DELETE_PERSON } from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "Tamas",
        age: Math.floor(Math.random() * 40),
      };
      return {
        // persons.push(newPerson) - ezt nem csinalhatom, mert modositanam a statet, ahelyett h ujat adnek meg
        // persons: persons.concat(newPerson) - ez azert jo, mert lemasolja a tombot es ugy "pushol"
        persons: [...state.persons, newPerson],
      };
    case DELETE_PERSON:
      return {
        persons: state.persons.filter(
          (person) => person.id !== action.payload.id
        ),
      };
  }
  return state;
};

export default reducer;
