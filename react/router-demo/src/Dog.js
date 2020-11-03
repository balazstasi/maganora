import React, { Component } from "react";

export class Dog extends Component {
  componentDidMount() {
    console.log("DOG DID MOUNT");
  }
  componentWillUnmount() {
    console.log("DOG WILL UNMOUNT");
  }
  render() {
    console.log("DOG RENDERED");
    return (
      <div>
        <h1>DOG!!!</h1>
        <p>The name is: {this.props.name}</p>
      </div>
    );
  }
}

export default Dog;
