import React, { Component } from "react";
import Counter from "./Counter";
import "./Total.css";

class Total extends Component {
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
    // csak akkor van bindolasra szukseg, ha a fg-ben hasznaljuk a .this kulcsszot!
    this.decrease = this.decrease.bind(this);
  }

  increase = (id) => {
    // Akkor van igy, ha a data nem a state resze
    // this.data[id - 1]++;
    // this.forceUpdate();
    // a forceUpdate fuggvennyel eroszakkal rafrissithetunk a Reactban,
    // a React altal nem figyelt valtozok figyeleset eroszakolhatjuk ki

    // counters = [{ id: 1, value: 0 }, { id: 2, value: 0 },{ id: 3, value: 0 }]
    // let counters = this.state.data
    // ebben az esetben a counters valtozo CSAK RA FOG MUTATNI a this.state.data-ra
    // a [...] szintaxissal letrejon egy MASOLAT A MEMORIABAN, nem csupan egy referencia
    let counters = [...this.state.data];

    // counter = { id: parameter id - 1, value: 0 }
    let counter = { ...counters[id - 1] };
    counter.value += 1; // vagy counter.value++
    counters[id - 1] = counter;

    this.setState({ data: counters });
  };
  decrease(id) {
    // Akkor van igy, ha a data nem a state resze
    // this.data[id - 1].value--;
    // this.forceUpdate();
    // a forceUpdate fuggvennyel eroszakkal rafrissithetunk a Reactban,
    // a React altal nem figyelt valtozok figyeleset eroszakolhatjuk ki
    let counters = [...this.state.data];

    // counter = { id: parameter id - 1, value: 0 }
    let counter = { ...counters[id - 1] };
    counter.value -= 1; // vagy counter.value++
    counters[id - 1] = counter;

    this.setState({ data: counters });
  }

  change = (id, value) => {
    if (value > 0) {
      this.increase(id);
    } else {
      this.decrease(id);
    }
  };

  /*
    Ez a fg akkor hivodik meg, ha a komponensunk 
      1. uj propokat kap
      2. valtozik a state
    prevProps = az uj propok elotti propok
    prevState = a valtozas elotti state
  */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      let newTotal = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        // newTotal = newTotal + this.state.data[i].value
        newTotal += +this.state.data[i].value;
      }
      this.setState({ total: newTotal });
    }
  }

  render() {
    return (
      <>
        <div className="total">
          Total amount of counters: {this.state.total}
        </div>
        {this.state.data.map((counter) => {
          return (
            <Counter
              id={counter.id}
              key={counter.id}
              value={counter.value}
              // onIncrement={this.increase}
              // onDecrement={this.decrease}
              // onChange={(value) => this.change(counter.id, value)}
              onChange={(id, value) => this.change(id, value)}
            />
          );
        })}
      </>
    );
  }
}

export default Total;
