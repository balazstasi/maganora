import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

export default function Todo({
  id,
  task,
  completed,
  toggleTodo,
  removeTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm task={task} id={id} editTodo={editTodo} toggleEditForm={toggle} />
      ) : (
        <>
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
        </>
      )}
      <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="Edit" onClick={toggle}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}
