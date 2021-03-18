import React from "react";
import TopArrow from "../00-UI/TopArrow";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen bg-wh">
      <TopArrow />
      <div className="relative bg-bg w-3/4 h-3/4">
        <h6 className="absolute text-sm bottom-1/2 right-1/2">
          miyuuu0728@gmail.com
        </h6>
        <h3 className="absolute text-sm md:text-lgC bottom-5 right-5 text-right">
          Let's make something <br />
          <span className="border-b-2 pb-1">awesome</span> together!
        </h3>
      </div>

      <h6 className="text-bg">&copy;2021 miyusetoyama</h6>
    </div>
  );
};

export default Footer;
