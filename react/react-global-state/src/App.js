import React, { useContext, useEffect } from "react";
import { Context } from "./store";

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    let todos = ["Bevasarlas", "Kutyasetaltatas", "Semmi"];

    dispatch({
      type: "SET_TODOS",
      payload: todos,
    });
    // a useEffect masodik parameterevel mondhatjuk meg hogy milyen valtozo modosulasakor fusson le a useEffect
    // Ha ures tombot adunk meg, akkor egyetlen egyszer fog, pontosan ugyanugy mint a componentDidMount
  }, []);

  const onChangeForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_TODO_INPUT",
      payload: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: state.todoInput,
    });

    dispatch({
      type: "SET_TODO_INPUT",
      payload: "",
    });
  };

  return (
    <div className="App">
      <h1>MY TODOS</h1>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-control">
          <label for="todo">Add a Todo</label>
          <input
            required
            autoFocus
            type="text"
            placeholder="Enter a Todo Item"
            id="todo"
            value={state.todoInput}
            onChange={(e) => onChangeForm(e)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
