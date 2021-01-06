import React, { useContext } from "react";
import { Context } from "store/store";

export default function Cart() {
  const [state, dispatch] = useContext(Context);
  return (
    <React.Fragment>
      {state.pizzas.length > 0 ? (
        state.pizzas.map((pizza) => (
          <div>
            <h2>{pizza.sauce.name}</h2>
            <h2>{pizza.cheese.name}</h2>
            <ul>
              {pizza.toppings.map((topping) => (
                <li>{topping.name}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h1>Jelenleg nincs egy pizza sem a kosarban!</h1>
      )}
    </React.Fragment>
  );
}
