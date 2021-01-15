import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "store/store";
import INGREDIENTS from "store/ingredients";
import classes from "./BuildControls.module.css";
import axios from "axios-config";

export default function BuildControls() {
  const [state, dispatch] = useContext(Context);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // TODO RESETELES
    reset(data);
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
    dispatch({ type: "ADD_TO_CART" });
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

  // useEffect(() => {
  //   axios
  //     .get("/orders.json")
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  //   // let res;
  //   // const getData = async () => {
  //   //   res = await axios.get("/orders.json");
  //   // };
  //   // getData();
  // }, []);

  // async akkor kell ha az ember nem a .then-es megodlast hasznalja
  // const onPurchase = async () => {
  //   const order = {
  //     sauce: state.sauce.name,
  //     cheese: state.cheese.name,
  //     toppings: state.toppings.map((topping) => topping.name),
  //   };

  //   // axios
  //   //   .post("/orders.json", order)
  //   //   .then((response) => console.log(response))
  //   //   .catch((error) => console.log(error));
  //   const res = await axios.post("/orders.json", order);
  //   console.log(res);
  // };

  return (
    <div>
      <form
        id="sauces"
        style={{ marginLeft: "40%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap flex-row mt-6">
          <div>
            <p class="text-black m-1">Szoszok</p>
            {Object.keys(INGREDIENTS.sauces).map((sauce) => (
              <React.Fragment key={sauce}>
                <input
                  className="p-2 m-1"
                  id={sauce}
                  value={sauce}
                  name="Szósz"
                  type="radio"
                  checked={
                    state.sauce && sauce === state.sauce.name ? true : false
                  }
                  onClick={() => dispatch({ type: "SET_SAUCE", payload: null })}
                  onChange={() =>
                    dispatch({
                      type: "SET_SAUCE",
                      payload: { ...INGREDIENTS.sauces[sauce], name: sauce },
                    })
                  }
                  ref={register({ required: true })}
                />
                <label htmlFor={sauce}>{sauce}</label>
                <br />
              </React.Fragment>
            ))}
            <p class="text-black m-1">Sajtok</p>
            {Object.keys(INGREDIENTS.cheeses).map((cheese) => (
              <React.Fragment key={cheese}>
                <input
                  className="p-2 m-1"
                  id={cheese}
                  value={cheese}
                  name="Sajt"
                  type="radio"
                  checked={
                    state.cheese && cheese === state.cheese.name ? true : false
                  }
                  onChange={() =>
                    dispatch({
                      type: "SET_CHEESE",
                      payload: { ...INGREDIENTS.cheeses[cheese], name: cheese },
                    })
                  }
                  onClick={() =>
                    dispatch({ type: "SET_CHEESE", payload: null })
                  }
                  ref={register({ required: true })}
                />
                <label htmlFor={cheese}>{cheese}</label>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div>
            <p class="text-black m-1">Feltetek</p>
            {Object.keys(INGREDIENTS.toppings).map((topping) => (
              <React.Fragment key={topping}>
                <input
                  className="p-2 m-1 ml-3"
                  id={topping}
                  value={topping}
                  name="Feltétek"
                  type="checkbox"
                  checked={
                    state.toppings.length > 0 &&
                    state.toppings.find((t) => t.name === topping)
                      ? true
                      : false
                  }
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
          <button
            type="submit"
            disabled={buttonDisabled}
            className={`rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline ${
              buttonDisabled
                ? "bg-gray-300 hover:bg-gray-300 text-black"
                : "bg-blue-500 hover:bg-blue-400 text-white"
            }`}
          >
            {(buttonDisabled && "Hozzáadás...") || "Kosárba"}
          </button>
        </div>
        <button
          onClick={() => reset()}
          type="button"
          className="mx-1 my-2 rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline bg-gray-300 hover:bg-gray-300 text-black"
        >
          Alapértelmezett
        </button>
      </form>
    </div>
  );
}
