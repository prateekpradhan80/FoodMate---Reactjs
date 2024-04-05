import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Utils/LayOut.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
