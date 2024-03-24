import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./ComponentsStyles.css";

const Menu = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="menu" to="/">
              ABC Automobiles
            </Link>
          </li>
          <li>
            <Link className="menu" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="menu" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="menu" to="/vehicles">
              Vehicles
            </Link>
          </li>
          <li>
            <Link className="menu" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="menu" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
