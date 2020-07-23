import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from "./SocialProfiles";


class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    // nem szukseges ha nevtelen arrow functionoket hasnzalunk ( () => {} ), mert igy nem a fuggvenyen belul hivatkozik a thisre, hanem a class this-jere
    // this.readMore = this.readMore.bind(this)
    // this.readLess = this.readLess.bind(this)
  }

  toggleBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    // feltetel ? mi van hha igaz : mi van hogyha hamis

    return (
      <div>
        <img className="profile" src="https://via.placeholder.com/200" alt="profilepic"></img>
        <h1>Tasi Balazs vagyok</h1>
        <p>Programozast oktatok ebben a percben</p>
        <p>Szeretek uj dolgokat tanulni</p>
        {this.state.displayBio ? (
            <div>
                <div>
                  <p>Budapesten lakom</p>
                  <p>Kedvenc keretrendszerem a VueJS</p>
                  <p>De a React sokkal ismertebb</p>
                </div>
                {/* button tag predefinialt onClick metodusa: clickelesre lefut egy adott fuggveny */}
                <button onClick={this.toggleBio}>Olvass kevesebbet</button>
            </div>
        ) : <button onClick={this.toggleBio}>Olvass tobbet</button>}
        <hr></hr>
        {/* JSX tag beszurodik a Projects class render metodusabol visszaterulo html/jsx struktura */}
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
