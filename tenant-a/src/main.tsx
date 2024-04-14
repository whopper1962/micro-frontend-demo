import React from "react";
import ReactDOM from "react-dom/client";
import { ItemsIndex } from "./views/Items/ItemsIndex";
import { ItemsShow } from "./views/Items/ItemsShow";
import { Login } from "common";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/items",
    element: <ItemsIndex />,
  },
  {
    path: "/items/:itemId",
    element: <ItemsShow />,
  },
  {
    path: "*",
    element: <Navigate to="/items" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
