import React from "react";
import "./NavBar.css";

const navBarItem = ["Portraits", "Travel", "About", "Contact"];

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div>
        <ul className="navbar-item">Home</ul>
      </div>
      <div className="navbar">
        {navBarItem.map((item) => {
          return <ul className="navbar-item">{item}</ul>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
