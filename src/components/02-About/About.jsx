import React, { useEffect, useState } from "react";
import Title from "../00-UI/Title";
import History from "./History";
import ScrollTrigger from "react-scroll-trigger";
import { TextAnimation } from "../00-UI/TextAnimation";
import miyu from "../../images/miyuBK.jpg";
import ViewTheResume from "./ViewTheResume";

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
    <div id="about" className="layout">
      <div>
        <Title no="01" title="who i am" />
        <div className="block md:flex flex-col items-center">
          <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
            <h5
              className={`
               ${
                 footervisible ? "textAnimation" : "invisible"
               } font-light my-12 md:my-10 lg:my-16 mx-4 md:mx-6`}
            >
              Miyu Setoyama is a passionate Frontend Developer who loves
              creating new things. Expert knowledge of HTML, CSS, JavaScript,
              and React. Familiar with Fullstack development, particularly the
              MERN stack.
            </h5>
          </ScrollTrigger>
          {/* <History /> */}
        </div>
        <ViewTheResume />
      </div>
      <div className="hidden md:block relative inset-0 m-auto ">
        <div className="about_right about_rec"></div>
        <img className="about_right about_img" src={miyu} alt="miyu" />
      </div>
    </div>
  );
};

export default About;
