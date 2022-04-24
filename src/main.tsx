import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "utils/getLibrary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <App />
      </Router>
    </Web3ReactProvider>
  </React.StrictMode>
);
