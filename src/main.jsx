/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import Shop from "./routes/shop.jsx";
import Cart from "./routes/cart.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
