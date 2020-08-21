import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import RollDice from "./projects/roll-dice/RollDice";
import Deck from "./projects/deck/Deck";
import CoinFlipper from "./projects/coin/CoinFlipper";
import About from "./About";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="about" className="navbar-brand">
                PORTFOLIO
              </Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link className="Link" to="/roll-dice">
                  Roll Dice
                </Link>
              </li>
              <li>
                <Link className="Link" to="/coin">
                  Coin Flipper
                </Link>
              </li>
              <li>
                <Link className="Link" to="/deck">
                  Card Dealer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/roll-dice">
            <RollDice />
          </Route>
          <Route path="/deck">
            <Deck />
          </Route>
          <Route path="/coin">
            <CoinFlipper />
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
