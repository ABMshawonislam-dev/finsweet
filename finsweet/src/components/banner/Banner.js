import React from "react";
import "./banner.css";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="box">
          <div className="text">
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <a className="work" href="#">
              View our work
            </a>
            <a className="pricing" href="#">
              View Pricing <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="img">
            <BannerImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
