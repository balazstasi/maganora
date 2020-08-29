import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todo({ id, task, completed, toggleTodo, removeTodo }) {
  return (
    <ListItem>
      <Checkbox
        color="primary"
        checked={completed}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <IconButton onClick={() => removeTodo(id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}
