import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <React.Fragment>
      {/*Navbar*/}
      <main className={"container"}>
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
