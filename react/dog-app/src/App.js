import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import csopi from "./images/csopi.jpg";
import mogyi from "./images/mogyi.jpg";
import kutyus from "./images/kutyus.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Csöpi",
        age: 5,
        src: csopi,
        facts: [
          "Csöpi szeret játszani.",
          "Random dolog 1.",
          "Random dolog 2!"
        ]
      },
      {
        name: "Mogyi",
        age: 3,
        src: mogyi,
        facts: [
          "1 asd",
          "2 asd",
          "3 asd"
        ]
      },
      {
        name: "Kutyus",
        age: 4,
        src: kutyus,
        facts: [
          "asdasdasd",
          "asdasdasdasd.",
          "asdasdasdasdasd."
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
