import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            placeholder="Új teendő"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Hozzáadás</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
