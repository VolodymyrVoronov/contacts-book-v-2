import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "./components/App/App";

import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/mixins.scss";
import "./styles/variables.scss";

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
