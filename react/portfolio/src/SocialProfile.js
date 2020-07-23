import React, { Component } from "react";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;

    return (
      <span>
        <a href={link}>
          <img 
            src={image} 
            alt="social-profile" 
            style={{
              width: "35px",
              height: "35px",
              margin: "10px"
            }}
          />
        </a>
      </span>
    );
  }
}

export default SocialProfile;
