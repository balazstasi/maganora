import React, { Component } from "react";
import Counter from "./Counter";
import NewCounter from "./NewCounter";

export class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
      total: 0,
    };
  }
  increase = (id) => {
    let counters = [...this.state.data];
    console.log(counters[id - 1]);
    let counter = { ...counters[id - 1] };
    counter.value += 1;
    counters[id - 1] = counter;

    this.setState({
      data: counters,
    });
  };
  decrease = (id) => {
    let counters = [...this.state.data];
    let counter = { ...counters[id - 1] };
    counter.value -= 1;
    counters[id - 1] = counter;

    this.setState({
      data: counters,
    });
  };

  change = (id, value) => {
    if (value > 0) {
      this.increase(id);
    } else {
      this.decrease(id);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      let total = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        console.log(this.state.data[i]);
        total += this.state.data[i].value;
      }
      this.setState({ total });
    }
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>TOTAL: {this.state.total}</h3>
        {this.state.data.map((counter) => {
          return (
            <div>
              {/* <Counter
                value={counter.value}
                key={counter.id}
                onIncrement={() => this.increase(counter.id)}
                onDecrement={() => this.decrease(counter.id)}
              /> */}
              <NewCounter
                value={counter.value}
                key={counter.id}
                onChange={(value) => this.change(counter.id, value)}
              />
            </div>
          );
        })}
        <hr></hr>
      </div>
    );
  }
}

export default Total;
