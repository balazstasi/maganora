import React, { useContext, useEffect } from "react";
import Layout from "components/Layout/Layout";
import PizzaBuilder from "containers/PizzaBuilder/PizzaBuilder";
import { Context } from "store/store";
import Cart from "components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "components/UI/Navbar/Navbar";

function App() {
  const [state] = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
