import React from "react";
import Title from "../00-UI/Title";
import History from "./History";
import AboutImg from "./AboutImg";

// const BackRec = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 0 0 150px 300px;
//   border-color: transparent transparent #c4c4c4 transparent;
//   line-height: 0px;
//   z-index:0;
// `

const About = () => {
  return (
    <div id="about" className="layout layout_one flex flex-col lg:flex-row">
      <div id="line" className="line hidden md:block top-0 left-300" />
      <div className="lg:w-1/2">
        <Title no="01" title="who i am" />
        <div className="flex flex-col items-center">
          <h4 className="font-light my-12 md:my-10 lg:my-16 mx-4 md:mx-6">
            My dream is that making something amaizing to people happy. Contact
            me if you have a same dreame as me.
          </h4>
          <History />
        </div>
      </div>
      <AboutImg />
      <div id="line" className="line bottom-0 left-300 lg:left-500"></div>
    </div>
  );
};

export default About;
