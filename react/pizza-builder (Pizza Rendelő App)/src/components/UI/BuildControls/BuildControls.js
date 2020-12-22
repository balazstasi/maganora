import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "store/store";
import INGREDIENTS from "store/ingredients";
import classes from "./BuildControls.module.css";

export default function BuildControls() {
  const [state, dispatch] = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
    dispatch({ type: "SET_SAUCE", payload: INGREDIENTS.sauces[data["Szósz"]] });
    dispatch({
      type: "SET_CHEESE",
      payload: INGREDIENTS.cheeses[data["Sajt"]],
    });
    for (let topping of data["Feltétek"]) {
      dispatch({
        type: "ADD_TOPPING",
        payload: INGREDIENTS.toppings[topping],
      });
    }
  };

  return (
    <div>
      <form
        id="sauces"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {Object.keys(INGREDIENTS.sauces).map((sauce) => (
          <React.Fragment key={sauce}>
            <input
              id={sauce}
              value={sauce}
              name="Szósz"
              type="radio"
              ref={register({ required: true })}
            />
            <label htmlFor={sauce}>{sauce}</label>
            <br />
          </React.Fragment>
        ))}
        <hr />
        {Object.keys(INGREDIENTS.cheeses).map((cheese) => (
          <React.Fragment key={cheese}>
            <input
              id={cheese}
              value={cheese}
              name="Sajt"
              type="radio"
              ref={register({ required: true })}
            />
            <label htmlFor={cheese}>{cheese}</label>
            <br />
          </React.Fragment>
        ))}
        <hr />
        {Object.keys(INGREDIENTS.toppings).map((topping) => (
          <React.Fragment key={topping}>
            <input
              id={topping}
              value={topping}
              name="Feltétek"
              type="checkbox"
              ref={register}
            />
            <label htmlFor={topping}>{topping}</label>
            <br />
          </React.Fragment>
        ))}
        <button type="submit">GENERÁLÁS</button>
      </form>
    </div>
  );
}
