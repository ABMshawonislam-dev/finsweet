import React from "react";
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
              <li>Home</li>
              <li>About us</li>
              <li>Features</li>
              <li>Pricing</li>
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
