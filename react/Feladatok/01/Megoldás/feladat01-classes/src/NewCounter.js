import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  handleChange = (value) => {
    this.props.onChange(value);
  };
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleChange(-1)}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.handleChange(1)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
