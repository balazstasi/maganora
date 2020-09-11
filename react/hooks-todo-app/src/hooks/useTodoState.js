import { useState } from "react";
import { v4 as uuid } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    // todos: todos
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    toggleTodo: (todoId) => {
      const updateTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updateTodos);
    },
    removeTodo: (todoId) => {
      const updateTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updateTodos);
    },
    editTodo: (todoId, newTodoText) => {
      const updatedTodos = todos.map((todo) =>
        //...todo == {id: todo.id, completed: todo.completed}
        todo.id === todoId ? { ...todo, task: newTodoText } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
