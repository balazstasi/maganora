import React from "react";
import classes from "./PizzaBuilder.module.css";
import Pizza from "components/Pizza/Pizza";
import BuildControls from "components/UI/BuildControls";

export default function PizzaBuilder() {
  return (
    <>
      <div className={classes.pizzaBuilder}>
        <Pizza />
      </div>
      <BuildControls />
    </>
  );
}
