import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";

import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // [undefined, undefined, undefined, undefined, undefined]
      dice: Array.from({ length: NUM_DICE }),
      // [false, false, false, false, false]
      locked: Array(NUM_DICE).fill(false),
      // Jelöli a hátralévő dobások számát: ez alapból 3
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        yahtzee: undefined,
        smallStraight: undefined,
        largeStraighT: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  // Ezzel a függvénnyel fogunk dobni
  roll(event) {
    this.setState((oldState) => ({
      // Ha a locked tömb indexedik értéke igaz, tehát ha le van lakatolva a kocka, akkor nem csinálunk semmit
      // Ha pedig nincs lelakatolva, akkor választunk 1-től 6-ig egy random számot
      dice: oldState.dice.map((die, index) =>
        oldState.locked[index] ? die : Math.ceil(Math.random() * 6)
      ),
      // Ha van még hátra dobásunk, akkor nem csinálunk semmit, ha nincs, akkor az összes kockát lelakatoljuk
      locked:
        oldState.rollsLeft > 1 ? oldState.locked : Array(NUM_DICE).fill(true),
      // Dobtunk, tehát levonunk egyet a hátralévő dobások számából
      rollsLeft: oldState.rollsLeft - 1,
    }));
  }

  // Ezzel a függvénnyel fogunk egy adott dobókockát lelakatolni/feloldani
  toggleLocked(index) {
    this.setState((oldState) => ({
      // Pl [1, 2, 4, 6, 7] (ez csak pelda a locked tombben True es False ertekek vannak)
      // Tegyuk fel hogy az index=2, tehat a locked[index]===4
      locked: [
        // ...[1, 2] === 1, 2
        ...oldState.locked.slice(0, index),
        // 4
        !oldState.locked[index],
        // ...[6, 7] === 6, 7
        ...oldState.locked.slice(index + 1),
        // vegeredmeny: locked: [1,2,4,6,7]
      ],
    }));
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Kockapóker!</h1>
          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
            ></Dice>
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                // Leellenőrizzük, hogy a locked tömb összes eleme TRUE
                // Nem kell az === true, mivel a JS-ben automatikusan azt nézzük, hogy true, ha így írjuk
                disabled={this.state.locked.every((x) => x)}
                onClick={this.roll}
              >
                {this.state.rollsLeft} dobás van hátra!
              </button>
            </div>
          </section>
        </header>
        <ScoreTable />
      </div>
    );
  }
}

export default Game;
