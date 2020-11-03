import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Dog from "./Dog";
import Contact from "./Contact";

const About = () => <h1>ABOUT ME!</h1>;

class App extends Component {
  state = {
    actualPage: "about",
  };

  switchPage = (page) => {
    this.setState({ actualPage: page });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <p onClick={() => this.switchPage("about")}>About</p>
          <p onClick={() => this.switchPage("contact")}>Contact</p>
          <p onClick={() => this.switchPage("dog")}>Dog</p>
        </nav>
        {this.state.actualPage === "about" && <About />}
        {this.state.actualPage === "contact" && <Contact />}
        {this.state.actualPage === "dog" && <Dog />}
      </div>
    );
  }
}

export default App;
