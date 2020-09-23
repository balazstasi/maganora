import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  // handleDecrement = () => {
  //   this.props.onDecrement(this.props.id);
  // };
  // handleIncrement = () => {
  //   this.props.onIncrement(this.props.id);
  // };

  // handleChange = (value) => {
  //    this.props.onChange(value)
  // }
  handleChange = (id, value) => {
    this.props.onChange(id, value);
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
            // onClick={this.handleDecrement}
            // onClick={() => this.handleChange(-1)}
            onClick={() => this.handleChange(this.props.id, -1)} // id, value
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-success"
            // onClick={this.handleIncrement}
            onClick={() => this.handleChange(this.props.id, 1)} // id, value
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
