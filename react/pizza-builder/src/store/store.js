import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  sauce: undefined,
  cheese: undefined,
  toppings: [],
  totalPrice: 0,
  pizzas: [],
};

// const { children } = props; mintajara
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
