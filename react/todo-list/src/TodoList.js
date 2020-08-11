import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Teendők</h1>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo id={todo.id} task={todo.task} removeTodo={this.remove} />
            );
          })}
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
