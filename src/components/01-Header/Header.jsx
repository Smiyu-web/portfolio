import React, { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { TextAnimation } from "../00-UI/TextAnimation";

const Header = () => {
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
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div id="header" className="layout_h">
        <div className="pl-100 pt-300 md:pt-100">
          <div>
            <h1 className="mb-8 h-30" data-aos="fade-right">
              miyu
            </h1>
            <h1 className="pl-200" data-aos="fade-right" data-aos-delay="100">
              setoyama
            </h1>
          </div>
          <ul className="font-medium tracking-wider text-xs md:text-base pl-200 pt-10">
            <li
              className={`
               ${visible ? "textAnimation" : "invisible"} `}
            >
              Front End Developer
            </li>
            <li
              className={`
               ${visible ? "textAnimation" : "invisible"}`}
            >
              Base in Vancouver. Born in Japan.
            </li>
          </ul>
        </div>
        <div
          id="line"
          className="scroll -bottom-10 left-300"
          data-aos="fade-up"
          data-aos-offset="-300"
        ></div>
      </div>
    </ScrollTrigger>
  );
};

export default Header;
