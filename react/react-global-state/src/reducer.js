const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "SET_TODO_INPUT":
      return {
        ...state,
        todoInput: action.payload,
      };
    default:
      throw new Error("Action type not found");
  }
};

export default Reducer;
