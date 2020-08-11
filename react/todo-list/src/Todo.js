import React, { Component } from "react";

class Todo extends Component {
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    return (
      <li>
        {this.props.task}
        <button onClick={this.handleRemove}>X</button>
        <button>Szerkesztés</button>
      </li>
    );
  }
}

export default Todo;
