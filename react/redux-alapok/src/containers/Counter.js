import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../components/CounterControl/CounterControl";
import CounterOutput from "../components/CounterControl/CounterOutput";

export class Counter extends Component {
  counterChangeHandler = (action, value) => {
    // eslint-disable-next-line default-case
    switch (action) {
      case "inc":
        this.setState((oldState) => {
          return { counter: oldState + 1 };
        });
        break;
      case "dec":
        this.setState((oldState) => {
          return { counter: oldState - 1 };
        });
        break;
      case "add":
        this.setState((oldState) => {
          return { counter: oldState + value };
        });
        break;
      case "sub":
        this.setState((oldState) => {
          return { counter: oldState - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.increment}
        />
        <CounterControl
          label="Decrement"
          clicked={this.counterChangeHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={this.counterChangeHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 15"
          clicked={this.counterChangeHandler("sub", 15)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
