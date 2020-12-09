import React from "react";
import classes from "./PizzaIngredient.module.css";

export default function PizzaIngredient({ type, data, i }) {
  return (
    <>
      {type === "base" && (
        // ez a process... valtozo a public mappara hivatkozo beepitett konstans
        // magyarul ezzel megyunk a public mappaba
        <img
          className={classes.pizzaBase}
          src={process.env.PUBLIC_URL + "base/base.png"}
          alt="Pizza alap"
          z-index={-3}
        />
      )}
      {type === "sauce" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt={data.name}
          z-index={-2}
        />
      )}
      {type === "cheese" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt={data.name}
          z-index={-1}
        />
      )}
      {type === "topping" && (
        <img
          className={classes.pizzaTopping}
          src={process.env.PUBLIC_URL + data.imgUrl}
          alt={data.name}
          z-index={i}
        />
      )}
    </>
  );
}
