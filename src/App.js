import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./features/flipkart/Home";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Home />
    </div>
  );
}

export default App;
