import React, { useContext, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import { Context } from "./store/store";

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Layout>
      <PizzaBuilder />
    </Layout>
  );
}

export default App;
