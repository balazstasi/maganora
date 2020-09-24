import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  handleDecrement = () => {
    this.props.onDecrement(this.props.id);
  };
  handleIncrement = () => {
    this.props.onIncrement(this.props.key);
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
            onClick={this.handleDecrement}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
