import React from "react";
import "./startup.css";
const Startup = () => {
  return (
    <section className="startup">
      <div className="container">
        <div className="box">
          <div className="img">
            <img src="images/startupimg.png" />
            <div className="overlay">
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
          <div className="text">
            <h3>Send inquiry</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="url" placeholder="Your Figma URL" />
            <button>Send an Inquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;
