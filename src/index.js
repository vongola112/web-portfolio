import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "./routes/error-pages";
// import Home from "./routes/home";
import NavBar from "./component/NavBar/NavBar";
import ContentWrapper from "./component/content/ContentWrapper.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "aboutme",
//         element: <AboutMe />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <NavBar />
    <ContentWrapper />
  </React.StrictMode>
);
