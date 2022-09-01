import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ContextProvider } from "../src/context/Context.js";
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
