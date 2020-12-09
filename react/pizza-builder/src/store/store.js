import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  sauce: { name: "HotSauce", imgUrl: "/sauces/hotsauce.png", price: 1000 },
  cheese: { name: "Cheddar", imgUrl: "./cheese/cheddar.png", price: 500 },
  toppings: [
    { name: "Bacon", imgUrl: "./toppings/bacon.png", price: 300 },
    { name: "Chicken", imgUrl: "./toppings/chicken.png", price: 500 },
  ],
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
