import React from "react";
import "./project.css";
const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="title">
          <h2>View our projects</h2>
          <a href="#">
            View More <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="box">
          <div className="left">
            <img src="images/projectimgleft.png" alt="" />
            <div className="text-box">
              <div className="details">
                <h4>Workhub office Webflow Webflow Design</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <a href="#">
                  View project <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <img src="images/projectimgright.png" alt="" />
              <div className="text-box">
                <div className="details">
                  <h4>Unisaas Website Design</h4>
                  <a href="#">
                    View project{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images/projectimgright.png" alt="" />
              <div className="text-box">
                <div className="details">
                  <h4>Unisaas Website Design</h4>
                  <a href="#">
                    View project{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
