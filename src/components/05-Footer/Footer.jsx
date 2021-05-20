import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import TopArrow from "./TopArrow";
import { TextAnimation } from "../00-UI/TextAnimation";

const Footer = () => {
  const [visible, setVisible] = useState();

  useEffect(() => {
    if (visible) {
      TextAnimation();
    }
  }, [visible]);

  const onEnterViewport = () => {
    setVisible(true);
  };
  const onExitViewport = () => {
    setVisible(false);
  };
  return (
    <footer
      id="footer"
      className="sticky z-10 flex flex-col justify-center items-center w-screen h-screen bg-wh"
    >
      <TopArrow />
      <div className="relative bg-bg w-3/4 h-3/4">
        <h6
          className="absolute inset-0 m-auto text-center top-1/2"
          data-aos="fade-up"
        >
          miyuuu0728@gmail.com
        </h6>
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          <h4
            className={`
            ${
              visible ? "textAnimation" : "invisible"
            } absolute bottom-20 md:bottom-24 right-150`}
          >
            Let's make something
          </h4>
          <h4
            className={`
              ${
                visible ? "textAnimation" : "invisible"
              } absolute bottom-100 right-100`}
          >
            awesome together!
          </h4>
        </ScrollTrigger>
      </div>
      <p className="text-bg absolute right-8 bottom-8">
        &copy;2021 miyusetoyama
      </p>
    </footer>
  );
};

export default Footer;
