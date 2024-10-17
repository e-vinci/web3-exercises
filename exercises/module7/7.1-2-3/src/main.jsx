import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "components/App/App";
import HomePage from "components/Pages/HomePage";
import CinemaPage from "components/Pages/CinemaPage";
import MovieListPage from "components/Pages/MovieListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinemas",
        element: <CinemaPage />,
      },
      {
        path: "movies",
        element: <MovieListPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
