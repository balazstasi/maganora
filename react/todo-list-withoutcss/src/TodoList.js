import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import { v4 as uuid } from "uuid";

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

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <h1>Teendők</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
