import React from "react";
import Arrow from "../../images/topArrow.png";

const TopArrow = () => {
  return (
    <div className="absolute right-5 top-100">
      <img src={Arrow} alt="top" className="top_arrow" />
      <h6 className="transform rotate-90 text-bl tracking-widest mt-6">TOP</h6>
    </div>
  );
};

export default TopArrow;
