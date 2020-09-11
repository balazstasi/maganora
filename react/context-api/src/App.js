import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    /*
      <div style={{backgroundColor: "red" ...}}>
        <NavBar />
        <Form />
      </div>
    */
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
