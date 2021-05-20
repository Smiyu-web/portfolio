import React from "react";
import Title from "../00-UI/Title";
import Slides from "./Slides";

const Works = () => {
  return (
    <div id="works" className="layout_wb">
      <div id="line" className="line top-0 left-300 md:left-500"></div>
      <Title no="02" title="works" className="left-500" />
      <Slides />
      <div id="line" className="line bottom-0 right-400"></div>
    </div>
  );
};

export default Works;
