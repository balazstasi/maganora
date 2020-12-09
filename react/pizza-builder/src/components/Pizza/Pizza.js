import React, { useContext } from "react";
import { Context } from "store/store";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

export default function Pizza() {
  const [state] = useContext(Context);
  return (
    <div>
      <PizzaIngredient type="base" />
      <PizzaIngredient type="sauce" data={state.sauce} />
      <PizzaIngredient type="cheese" data={state.cheese} />
      {state.toppings.map((topping, i) => (
        <PizzaIngredient type="topping" key={i} data={topping} i={i} />
      ))}
    </div>
  );
}
