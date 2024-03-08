// index.js
import React, { useState } from "react";
import NavBar from "./component/NavBar/NavBar.js";
import "./index.css";
import ContentWrapper from "./component/content/ContentWrapper.js";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <div className="header">
        <NavBar onSelectComponent={handleSelectComponent} />
      </div>

      <ContentWrapper selectedComponent={selectedComponent} />
    </div>
  );
};

export default App;
