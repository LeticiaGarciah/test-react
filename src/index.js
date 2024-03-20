import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes } from "./routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
