import React from "react";
import classes from "./PizzaIngredient.module.css";

export default function PizzaIngredient({ type, data, i }) {
  return (
    <>
      {type === "base" && (
        <img
          className={classes.pizzaBase}
          src={process.env.PUBLIC_URL + "./base.png"}
          alt="Pizza Base"
          z-index={-3}
        />
      )}
      {type === "sauce" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt="Pizza Sauce"
          z-index={-2}
        />
      )}
      {type === "cheese" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt="Pizza Sauce"
          z-index={-1}
        />
      )}
      {type === "topping" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt="asd"
          z-index={i}
        />
      )}
    </>
  );
}
