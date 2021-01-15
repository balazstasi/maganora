import React, { useContext, useEffect } from "react";
import Layout from "components/Layout/Layout";
import PizzaBuilder from "containers/PizzaBuilder/PizzaBuilder";
import { Context } from "store/store";
import Cart from "components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "components/UI/Navbar/Navbar";

function App() {
  const [state, dispatch] = useContext(Context);

  // componentDidMount
  useEffect(() => {
    const localState = localStorage.getItem("state");
    console.log(localState);
    localState &&
      dispatch({ type: "SET_STATE", payload: JSON.parse(localState) });
  }, [dispatch]);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    console.log(JSON.parse(localStorage.getItem("state")));
  }, [dispatch, state]);

  return (
    <Layout>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/builder">
            <PizzaBuilder />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <PizzaBuilder />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
