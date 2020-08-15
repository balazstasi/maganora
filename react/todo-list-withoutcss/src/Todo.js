import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChange = (evt) => {
    this.setState({
      task: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
    // igy is jo!
    // this.setState({ isEditing: false });
    // this.setState({ isEditing: !this.state.isEditing })
  };

  handleToggle = (evt) => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Mentés</button>
        </form>
      );
    } else {
      result = (
        <li
          onClick={this.handleToggle}
          className={this.props.completed && "Todo-completed"}
        >
          {this.props.task}
          <button onClick={this.handleRemove}>X</button>
          <button onClick={this.toggleForm}>Szerkesztés</button>
        </li>
      );
    }
    return result;
  }
}

export default Todo;
