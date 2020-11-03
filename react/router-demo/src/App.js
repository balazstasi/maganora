import "./App.css";
import React, { Component } from "react";
import Dog from "./Dog";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from "react-router-dom";

const About = () => <h1>ABOUT ME!</h1>;

const HomePage = () => (
  <div>
    <h1>HOME PAGE</h1>
  </div>
);

class App extends Component {
  state = {
    valtozo: "asd",
  };
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-nav">
            <NavLink activeClassName="active-link" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="active-link" to="/contact">
              Contact
            </NavLink>
            <NavLink activeClassName="active-link" to="/dog">
              Dog
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/valtozo"
              component={() => <Dog name={"csöpi"} />}
            />
            <Route exact path="/dog" render={() => <Dog name={"morzsi"} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
