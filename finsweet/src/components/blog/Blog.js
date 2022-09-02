import React from "react";
import "./blog.css";
const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="title">
          <h2>Our blog</h2>
        </div>
        <div className="box">
          <div className="item">
            <img src="images/blog.png" />
            <span>19 Jan 2022</span>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
          </div>
          <div className="item">
            <img src="images/blog.png" />
            <span>19 Jan 2022</span>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
          </div>
          <div className="item">
            <img src="images/blog.png" />
            <span>19 Jan 2022</span>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
