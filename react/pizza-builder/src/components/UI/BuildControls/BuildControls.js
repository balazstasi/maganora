import React from "react";
import { useForm, useContext } from "react-hook-form";
import Context from "store/store";

export default function BuildControls() {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* SZÓSZ */}
      <input
        name="Szósz"
        type="radio"
        value="Marinara"
        ref={register({ required: true })}
      />
      <input
        name="Szósz"
        type="radio"
        value="BBQ"
        ref={register({ required: true })}
      />
      <input
        name="Szósz"
        type="radio"
        value="Ranch"
        ref={register({ required: true })}
      />
      <input
        name="Szósz"
        type="radio"
        value="HotSauce"
        ref={register({ required: true })}
      />
      {/* SAJT */}
      <input
        name="Sajt"
        type="radio"
        value="Cheddar"
        ref={register({ required: true })}
      />
      <input
        name="Sajt"
        type="radio"
        value="ExtraCheddar"
        ref={register({ required: true })}
      />
      <input
        name="Sajt"
        type="radio"
        value="Mozarella"
        ref={register({ required: true })}
      />
      <input
        name="Sajt"
        type="radio"
        value="ExtraMozarella"
        ref={register({ required: true })}
      />
      <input
        name="Sajt"
        type="radio"
        value="ExtraMozarellaDouble"
        ref={register({ required: true })}
      />
      {/* FELTÉT */}
      <input type="checkbox" placeholder="Bacon" name="Bacon" ref={register} />
      <input
        type="checkbox"
        placeholder="Chicken"
        name="Chicken"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Mushroom"
        name="Mushroom"
        ref={register}
      />
      <input type="checkbox" placeholder="Ham" name="Ham" ref={register} />
      <input
        type="checkbox"
        placeholder="Onions"
        name="Onions"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Pepperoni"
        name="Pepperoni"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Peppers"
        name="Peppers"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Pineapple"
        name="Pineapple"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Sausages"
        name="Sausages"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Spinach"
        name="Spinach"
        ref={register}
      />
      <input
        type="checkbox"
        placeholder="Tomatoes"
        name="Tomatoes"
        ref={register}
      />

      <input type="submit" />
    </form>
  );
}
