import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../components/CounterControl/CounterControl";
import CounterOutput from "../components/CounterOutput/CounterOutput";
import * as actionTypes from "../store/actions";

export class Counter extends Component {
  state = {
    showModal: false,
  };

  show = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubtract} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <button onClick={this.show}>ShowModal</button>
        <ul>
          {this.props.results.map((result) => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
        <hr />
        {this.state.showModal && <h1>MUTASD NE MUTASD</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter,
    results: state.resultsReducer.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () =>
      dispatch({
        type: actionTypes.INCREMENT,
      }),
    onDecrement: () =>
      dispatch({
        type: actionTypes.DECREMENT,
      }),
    onAdd: () =>
      dispatch({
        type: actionTypes.ADD,
        payload: { value: 5 },
      }),
    onSubtract: () =>
      dispatch({
        type: actionTypes.SUBTRACT,
        payload: { value: 15 },
      }),
    onStoreResult: (result) =>
      dispatch({
        type: actionTypes.STORE_RESULT,
        payload: { result },
      }),
    onDeleteResult: (resultId) =>
      dispatch({
        type: actionTypes.DELETE_RESUlT,
        payload: { resultId },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
