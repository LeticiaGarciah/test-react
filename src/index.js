import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./reset.scss";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
