import React from "react";
import "./work.css";
const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="box">
          <div className="left">
            <div className="title">
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="#">
                Get in touch with us{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="worklist">
              <img src="images/workimg.png" alt="" />
              <h3>Strategy</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="worklist">
              <img src="images/workimg.png" alt="" />
              <h3>Strategy</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="worklist">
              <img src="images/workimg.png" alt="" />
              <h3>Strategy</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="worklist">
              <img src="images/workimg.png" alt="" />
              <h3>Strategy</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
