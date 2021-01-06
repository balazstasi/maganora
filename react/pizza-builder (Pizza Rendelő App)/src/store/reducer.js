const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_SAUCE":
      return {
        ...state,
        sauce: action.payload,
      };
    case "SET_CHEESE":
      return {
        ...state,
        cheese: action.payload,
      };
    case "ADD_TOPPING":
      let toppings = [...state.toppings, action.payload];
      return {
        ...state,
        toppings,
      };
    case "REMOVE_TOPPING":
      return {
        ...state,
        toppings: state.toppings.filter((t) => t.name !== action.payload.name),
      };
    case "SUM_PRICES":
      return {
        ...state,
        totalPrice: state.toppings.reduce((prev, next) => prev + next),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            sauce: state.sauce,
            cheese: state.cheese,
            toppings: state.toppings,
          },
        ],
      };
    default:
      throw new Error("The action type provided can't be found");
  }
};

export default Reducer;
