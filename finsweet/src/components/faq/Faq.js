import React, { useState } from "react";
import Accordian from "../../helpers/accordian/Accordian";
import "./faq.css";
const Faq = () => {
  let [accordianItem, setAccordianItem] = useState([
    {
      heading: "How much time does it take?",
      details:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: true,
    },
    {
      heading: "What is your class naming convention?",
      details:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "How do you communicate?",
      details:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "I have a bigger project. Can you handle it?",
      details:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "What is your class naming convention?",
      details:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
  ]);

  let handleOpen = (id) => {
    accordianItem.map((item, index) => {
      if (index != id) {
        item.state = false;
      } else {
        item.state = !item.state;
      }
    });
    setAccordianItem([...accordianItem]);
  };
  return (
    <section className="faq">
      <div className="container">
        <div className="box">
          <div className="left">
            <div className="title">
              <h2>Frequently asked questions</h2>
              <a href="#">Contact us for more info</a>
            </div>
          </div>
          <div className="right">
            {accordianItem.map((item, index) => (
              <Accordian
                handleOpen={handleOpen}
                index={index}
                open={item.state}
                heading={item.heading}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
