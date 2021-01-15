import { v4 as uuid } from "uuid";

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      const store = action.payload;
      return {
        sauce: store.sauce,
        cheese: store.cheese,
        toppings: [...store.toppings],
        pizzas: [...store.pizzas],
        totalPrice: store.totalPrice,
      };
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
            id: uuid(),
            sauce: state.sauce,
            cheese: state.cheese,
            toppings: state.toppings,
            totalPrice: 0,
          },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        pizzas: state.pizzas.filter((pizza) => pizza.id !== action.payload),
      };
    case "EMPTY_CART":
      console.log("[DISPATCH] EMPTY_CART");
      return {
        ...state,
        pizzas: [],
      };
    default:
      throw new Error("The action type provided can't be found");
  }
};

export default Reducer;
