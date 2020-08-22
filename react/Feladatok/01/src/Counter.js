import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-success">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
