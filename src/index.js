import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configure-store";


ReactDOM.render(
  <ReduxProvider store={configureStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

