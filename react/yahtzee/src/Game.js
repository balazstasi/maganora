import React, { Component } from "react";

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
  toggleLocked(index) { }

  render() {
    return <div>Game works!</div>;
  }
}

export default Game;
