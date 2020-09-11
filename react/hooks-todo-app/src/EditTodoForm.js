import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        editTodo(id, value);
        toggleEditForm();
        // reset();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
