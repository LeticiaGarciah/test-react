import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./reset.scss";

<<<<<<< Updated upstream
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
=======
import { Routes } from "./routes";
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
