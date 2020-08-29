import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <>
      <Paper style={{ margin: "1rem 0", paddig: "0 1rem" }} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Add New Todo"
          margin="normal"
          fullWidth
        />
      </form>
    </>
  );
}
