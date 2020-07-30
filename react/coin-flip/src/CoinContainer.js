import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://www.mnb.hu/i/100forint-kossuth-emlekerme-hatoldal.exact124x123.png",
      },
      {
        side: "tails",
        imgSrc:
          "https://www.mnb.hu/i/100forint-kossuth-emlekerme-elooldal.exact129x127.png",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  
  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState(oldState => {
      return {
        currCoin: newCoin,
        nFlips: oldState.nFlips + 1,
        nHeads: oldState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: oldState.nTails + (newCoin.side === "tails" ? 1 : 0),
      }
    })
  }


  handleClick() {
    this.flipCoin()
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Dobj az érmével!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Dobás!</button>
        <p>
          {this.state.nFlips} dobásból {this.state.nHeads} fej és{" "}
          {this.state.nTails} írás!
        </p>
      </div>
    );
  }
}

export default CoinContainer;
