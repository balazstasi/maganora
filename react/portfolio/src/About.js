import React, { Component } from "react";
import SocialProfiles from "./SocialProfiles";

class About extends Component {
  state = { displayBio: false };
  toggleBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <img
          className="profile"
          src="https://via.placeholder.com/200"
          alt="profilepic"
        ></img>
        <h1>I'm Tasi Balázs</h1>
        <SocialProfiles />
        <p>
          I'm mainly a frontend web developer and an open source software
          enthusiast
        </p>
        {this.state.displayBio ? (
          <div>
            <div>
              <p>I live in Budapest</p>
              <p>I am experienced in VueJS, Angular and React too</p>
              <p>I also teach development as a hobby and secondary income</p>
            </div>
            {/* button tag predefinialt onClick metodusa: clickelesre lefut egy adott fuggveny */}
            <button onClick={this.toggleBio}>Read less</button>
          </div>
        ) : (
          <button onClick={this.toggleBio}>Read more</button>
        )}
        <hr />
      </div>
    );
  }
}

export default About;
