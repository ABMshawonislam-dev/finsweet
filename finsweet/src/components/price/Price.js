import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";
const Price = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="box">
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <div className="btn">
              <Link to="#">Get started</Link>
            </div>
          </div>
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <div className="btn">
              <Link to="#">Get started</Link>
            </div>
            <div className="round"></div>
          </div>
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <div className="btn">
              <Link to="#">Get started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
