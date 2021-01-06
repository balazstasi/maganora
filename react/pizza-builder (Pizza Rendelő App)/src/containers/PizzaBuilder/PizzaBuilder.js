import React from "react";
import Pizza from "components/Pizza/Pizza";
import BuildControls from "components/UI/BuildControls/BuildControls";
import classes from "./PizzaBuilder.module.css";

export default function PizzaBuilder() {
  return (
    <>
      <div>
        <div className={classes.PizzaBuilder}>
          <Pizza />
        </div>
        <BuildControls />
      </div>
    </>
  );
}
