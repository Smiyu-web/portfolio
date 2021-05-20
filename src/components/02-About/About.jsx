import React, { useEffect, useState } from "react";
import Title from "../00-UI/Title";
import History from "./History";
import AboutImg from "./AboutImg";
import ScrollTrigger from "react-scroll-trigger";
import { TextAnimation } from "../00-UI/TextAnimation";

const About = () => {
  const [footervisible, setFooterVisible] = useState();

  useEffect(() => {
    if (footervisible) {
      TextAnimation();
    }
  }, [footervisible]);

  const onEnterViewport = () => {
    setFooterVisible(true);
  };
  const onExitViewport = () => {
    setFooterVisible(false);
  };

  return (
    <div id="about" className="layout_a">
      <div className="md:w-1/2">
        <Title no="01" title="who i am" />
        <div className="flex flex-col items-center">
          <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
            <h5
              className={`
               ${
                 footervisible ? "textAnimation" : "invisible"
               } font-light my-12 md:my-10 lg:my-16 mx-4 md:mx-6`}
            >
              My dream is that making something amaizing to people happy.
              Contact me if you have a same dreame as me.
            </h5>
          </ScrollTrigger>
          <History />
        </div>
      </div>
      <AboutImg />
      <div id="line" className="line bottom-0 left-300 md:left-500"></div>
    </div>
  );
};

export default About;
