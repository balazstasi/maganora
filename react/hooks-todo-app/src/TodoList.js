import React from "react";
import Todo from "./Todo";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <ListItem>
            <ListItemText>
              <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
