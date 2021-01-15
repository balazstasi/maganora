import OrderForm from "components/UI/OrderForm/OrderForm";
import React, { useContext, useState } from "react";
import { Context } from "store/store";

export default function Cart() {
  const [state, dispatch] = useContext(Context);
  const [showOrderForm, setShowOrderForm] = useState(false);
  return (
    <React.Fragment>
      <h1 className="text-3xl m-6">Kosár</h1>
      <div className="mx-6">
        <button
          onClick={() => dispatch({ type: "EMPTY_CART" })}
          className="mx-2 rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline bg-red-500 hover:bg-red-400 text-white"
        >
          Kosár ürítése
        </button>
        <button
          onClick={() => setShowOrderForm(!showOrderForm)}
          className="rounded-full px-4 py-2 outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-400 text-white"
        >
          {showOrderForm ? "Űrlap elrejtése" : "Cím megadása"}
        </button>
      </div>
      <div className="flex flex-row">
        <div>{showOrderForm && <OrderForm />}</div>
        <div className="mx-4">
          <h2 className="text-xl ml-6 p-2">A kosarad tartalma:</h2>
          <div className="container flex flex-row flex-wrap">
            {state.pizzas.length > 0 ? (
              state.pizzas.map((pizza) => (
                <div className="overflow-hidden rounded-lg shadow-xl ml-6">
                  <h2 className="text-md text-semibold ml-6">
                    <span className="font-semibold text-lg">Szósz: </span>
                    {pizza.sauce.name}{" "}
                    <span
                      className="text-lg cursor-pointer text-red-500 hover:text-red-400"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: pizza.id,
                        })
                      }
                    >
                      X
                    </span>
                  </h2>
                  <h2 className="text-md text-semibold ml-6">
                    <span className="font-semibold text-lg">Sajt: </span>
                    {pizza.cheese.name}
                  </h2>
                  <h2 className="text-md text-semibold ml-6">Feltétek:</h2>
                  <ul className="list-disc">
                    {pizza.toppings.map((topping) => (
                      <li className="text-md text-semibold ml-12">
                        {topping.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <h1 className="ml-7">Jelenleg nincs egy pizza sem a kosarban!</h1>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
