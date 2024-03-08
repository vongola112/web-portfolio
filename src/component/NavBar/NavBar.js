import React, { useState } from "react";
import "./NavBar.css";

const navBarItem = ["Portraits", "Travel", "About", "Contact"];


const NavBar = ({onSelectComponent}) => {
  
  return (
    <div className="navbar-wrapper">
      <div className="navbar-home">
        <div className="navbar-item" onClick={() => onSelectComponent("Home")}>Home</div>
      </div>
      <div className="navbar">
        {navBarItem.map((item) => {
          return <div className="navbar-item" key={item} onClick={() => onSelectComponent(item)}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
