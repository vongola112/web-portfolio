import React from "react";
import "./ContentWrapper.css";
import AboutMe from "./AboutMe.js";
import Portraits from "./Portraits.js";
import Travel from "./Travel.js";
import Home from  "./Home.js";

const ContentWrapper = ({ selectedComponent }) => {
  let component;

  switch (selectedComponent) {
    case "Home":
      component = <Home />;
      break;
    case "Portraits":
      component = <Portraits />;
      break;
    case "Travel":
      component = <Travel />;
      break;
    case "About":
      component = <AboutMe />;
      break;
    case "Contact":
      break;
    default:
      console.log("test");
  }

  return <div className="content-wrapper">{component}</div>;
};

export default ContentWrapper;
