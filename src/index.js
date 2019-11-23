import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Keditor from "./Keditor";
import { value } from "./initialValue";

function App() {
  return <Keditor value={value} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
