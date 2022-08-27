import React, { useState } from "react";
import "./accordian.css";

const Accordian = ({ open, handleOpen, index, heading, details }) => {
  return (
    <div className="accordian-item">
      <h2 onClick={() => handleOpen(index)}>
        <span className="number">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
        {heading}
        <span className="icon">
          {open ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
        </span>
      </h2>
      {open && <div dangerouslySetInnerHTML={{ __html: details }}></div>}
    </div>
  );
};

export default Accordian;
