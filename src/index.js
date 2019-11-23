import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Teditor from "./Teditor";
import { value } from "./initialValue";

function App() {
  return <Teditor value={value} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
