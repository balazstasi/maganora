import React from "react";
import "./Person.css";

export const person = (name, age, clicked) => (
  <div className="Person" onClick={clicked}>
    <h1>{name}</h1>
    <p>{age}</p>
  </div>
);
