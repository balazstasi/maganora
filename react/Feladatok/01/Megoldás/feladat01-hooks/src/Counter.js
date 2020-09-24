import React from "react";
import "./Counter.css";

function Counter(props) {
  const { value } = props;

  const handleChange = (value) => {
    props.onChange(value, props.id);
  };
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleChange(-1)}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleChange(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
