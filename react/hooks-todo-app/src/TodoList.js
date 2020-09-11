import React from "react";
import Todo from "./Todo";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export default function TodoList({ todos, toggleTodo, removeTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo
              // id={todo.id}
              // task={todo.task}
              // completed={todo.completed}
              // ugyanaz az alabbi sor, mint a fenti 3!!
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
