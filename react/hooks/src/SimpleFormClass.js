import React, { Component } from "react";

export class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <h1>You entered: {this.state.email}</h1>
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SimpleFormClass;
