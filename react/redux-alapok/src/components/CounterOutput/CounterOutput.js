import React from "react";
import "./CounterOutput.js";

const counterOutput = (props) => (
  <div className="CounterOutput">Current Counter: {props.value}</div>
);

export default counterOutput;
