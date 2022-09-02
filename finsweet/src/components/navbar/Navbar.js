import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="nav-item">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>Features</li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
            <a className="btn">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
