import React from "react";
import "./NavBar.css";

const navBarItem = ["Portraits", "Travel", "About", "Contact"];

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div>
        <ul>Home</ul>
      </div>
      <div className="navbar">
        {navBarItem.map((item) => {
          return <ul>{item}</ul>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
