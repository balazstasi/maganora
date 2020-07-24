import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
    this.add = this.add.bind(this)
  }
  add() {
    this.setState({
      value: this.state.value+1
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <Counter value={this.state.value} />
        <button onClick={this.add}>Add 1</button>
      </div>
    );
  }
}

export default App;
