import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "store/store";
import axios from "axios-config";
import "react-notifications/lib/notifications.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function OrderForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [state, dispatch] = useContext(Context);

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success(
            "A Rendelés sikeresen fogadva...",
            "Sikeres rendelés!",
            3000
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          console.log("Not implemented");
      }
    };
  };

  const onSubmit = async (data) => {
    const calculatePrice = (pizza) => {
      const saucePrice = pizza.sauce ? pizza.sauce.price : 0;
      const cheesePrice = pizza.cheese ? pizza.cheese.price : 0;
      const toppingsPrice =
        pizza.toppings.length > 0
          ? pizza.toppings
              .map((topping) => topping.price)
              .reduce((a, b) => a + b, 0)
          : 0;

      return saucePrice + cheesePrice + toppingsPrice;
    };
    const order = {
      ...data,
      pizzas: state.pizzas.map((pizza) => {
        return {
          sauce: pizza.sauce.name,
          cheese: pizza.cheese.name,
          toppings: pizza.toppings.map((topping) => topping.name),
          price: calculatePrice(pizza),
        };
      }),
      totalPrice: state.pizzas
        .map((pizza) => calculatePrice(pizza))
        .reduce((a, b) => a + b, 0),
    };

    const result = await axios.post("/orders.json", order);
    console.log(result);
  };

  return (
    <div className="mx-6">
      <h1 className="text-xl text-bold my-6 mx-2">Rendelés Adatai</h1>
      <form
        className="flex flex-col w-full m-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row">
          <div className="flex flex-col w-full mr-2">
            <label forHtml="lastName">Vezetéknév</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              ref={register({ required: true })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label forHtml="firstName">Keresztnév</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <label htmlfor="address">Cím</label>
        <input
          type="text"
          id="address"
          name="address"
          ref={register({ required: true })}
        />
        <label htmlfor="phonenumber">Telefonszám</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          ref={register({ required: true })}
        />
        <label forHtml="city">Város</label>
        <select
          name="city"
          id="city"
          className="w-full"
          ref={register({ required: true })}
        >
          <option value="Budapest">Budapest</option>
          <option value="Debrecen">Debrecen</option>
        </select>
        <label forHtml="zipcode">Irányítószám</label>
        <input
          type="number"
          name="zipcode"
          id="zipcode"
          ref={register({ required: true })}
        />
        <button
          onClick={createNotification("success")}
          className="place-self-center w-1/2 mt-4 mx-8 rounded-full py-2 outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-400 text-white"
        >
          Rendelés
        </button>
      </form>
      <NotificationContainer />
    </div>
  );
}
