import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/about"
        >
          <li>about</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/login"
        >
          <li>login</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
