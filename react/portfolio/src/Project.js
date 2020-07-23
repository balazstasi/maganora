import React, { Component } from "react";

class Project extends Component {
  render() {
    const { title, image, link } = this.props.project;
    return (
      <div
        style={{
          display: "inline-block",
          width: "300px",
          margin: "10px",
        }}
      >
        <h3>{title}</h3>
        <img
          src={image}
          alt={title}
          style={{
            width: "200px",
            height: "120px",
          }}
        ></img>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

export default Project;
