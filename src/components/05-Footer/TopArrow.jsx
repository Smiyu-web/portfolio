import React from "react";
import Arrow from "../../images/topArrow.png";

const TopArrow = () => {
  return (
    <div className="absolute right-5 top-100" data-aos="fade-right">
      <a href="#header">
        <img src={Arrow} alt="top" className="top_arrow" />
        <p className="transform rotate-90 text-bl tracking-widest mt-6">TOP</p>
      </a>
    </div>
  );
};

export default TopArrow;
