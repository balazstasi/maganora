import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "store/store";
import INGREDIENTS from "store/ingredients";
import classes from "./BuildControls.module.css";

export default function BuildControls() {
  const [state, dispatch] = useContext(Context);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const check = (event) => {
    const toppingName = event.target.value;
    if (state.toppings.find((topping) => topping.name === toppingName)) {
      dispatch({
        type: "REMOVE_TOPPING",
        payload: { ...INGREDIENTS.toppings[toppingName], name: toppingName },
      });
    } else {
      dispatch({
        type: "ADD_TOPPING",
        payload: { ...INGREDIENTS.toppings[toppingName], name: toppingName },
      });
    }
  };

  return (
    <div>
      <form
        id="sauces"
        style={{ "margin-left": "40%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap flex-row mt-6">
          <div>
            <p class="text-white m-1">Szoszok</p>
            {Object.keys(INGREDIENTS.sauces).map((sauce) => (
              <React.Fragment key={sauce}>
                <input
                  className="p-2 m-1"
                  id={sauce}
                  value={sauce}
                  name="Szósz"
                  type="radio"
                  onChange={() =>
                    dispatch({
                      type: "SET_SAUCE",
                      payload: INGREDIENTS.sauces[sauce],
                    })
                  }
                  ref={register({ required: true })}
                />
                <label htmlFor={sauce}>{sauce}</label>
                <br />
              </React.Fragment>
            ))}
            <p class="text-white m-1">Sajtok</p>
            {Object.keys(INGREDIENTS.cheeses).map((cheese) => (
              <React.Fragment key={cheese}>
                <input
                  className="p-2 m-1"
                  id={cheese}
                  value={cheese}
                  name="Sajt"
                  type="radio"
                  onChange={() =>
                    dispatch({
                      type: "SET_CHEESE",
                      payload: INGREDIENTS.cheeses[cheese],
                    })
                  }
                  ref={register({ required: true })}
                />
                <label htmlFor={cheese}>{cheese}</label>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div>
            <p class="text-white m-1">Feltetek</p>
            {Object.keys(INGREDIENTS.toppings).map((topping) => (
              <React.Fragment key={topping}>
                <input
                  className="p-2 m-1 ml-3"
                  id={topping}
                  value={topping}
                  name="Feltétek"
                  type="checkbox"
                  onChange={(event) => check(event)}
                  ref={register}
                />
                <label htmlFor={topping}>{topping}</label>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <button className="bg-blue-500 text-white rounded-full hover:bg-blue-400 px-4 py-2 mx-0 outline-none focus:shadow-outline">
            Kosarba
          </button>
        </div>
      </form>
    </div>
  );
}
