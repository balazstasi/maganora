import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

export class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((die, index) => (
          <Die
            handleClick={this.props.handleClick}
            value={die}
            locked={this.props.locked[index]}
            index={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
