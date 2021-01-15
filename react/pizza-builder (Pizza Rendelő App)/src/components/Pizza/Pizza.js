import React, { useContext } from "react";
import { Context } from "store/store";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import classes from "./Pizza.module.css";

export default function Pizza() {
  const [state] = useContext(Context);
  return (
    <div className={classes.pizza}>
      <PizzaIngredient type="base" />
      {state.sauce && <PizzaIngredient type="sauce" data={state.sauce} />}
      {state.cheese && <PizzaIngredient type="cheese" data={state.cheese} />}
      {state.toppings &&
        state.toppings.length > 0 &&
        state.toppings.map((topping, i) => (
          <PizzaIngredient type="topping" data={topping} i={i} key={i} />
        ))}
    </div>
  );
}
