import React, { Component } from "react";
import Counter from "./Counter";
import ExerciseText from "./ExerciseText";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

class App extends Component {
  render() {
    return (
      <div>
        <ExerciseText />
        <Counter value={0} />
      </div>
    );
  }
}

export default App;
