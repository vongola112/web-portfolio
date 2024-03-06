import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./component/NavBar/NavBar";
import ContentWrapper from "./component/content/ContentWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ContentWrapper />
  </React.StrictMode>
);
