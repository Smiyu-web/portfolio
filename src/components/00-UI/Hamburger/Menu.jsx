import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Menu = (props) => {
  const [open, setOpen] = useState(props.isOpen);

  useEffect(() => {
    if (props.isOpen !== open) {
      setOpen(props.isOpen);
    }
  }, [props]);

  const menus = [
    { link: "#about", text: "WHO I AM", delay: "0.1s" },
    { link: "#works", text: "WORKS", delay: "0.2s" },
    { link: "#blogs", text: "BLOGS", delay: "0.3s" },
    { link: "#footer", text: "CONTACT", delay: "0.4s" },
  ];

  const ListItem = menus.map((menu, index) => {
    return (
      <a href={menu.link} key={index}>
        <li
          className="my-8"
          style={{
            opacity: "0",
            animation: "1s SlideIn forwards",
            animationDelay: menu.delay,
          }}
        >
          {menu.text}
        </li>
      </a>
    );
  });

  return (
    <div>
      {open ? (
        <div className="hamburger_menu">
          <ul className="hamburger_ul">{ListItem}</ul>
          <ul className="hamburger_ul ring-black flex justify-center">
            <li
              className="pr-4"
              style={{
                opacity: "0",
                animation: "0.5s SlideIn forwards",
                animationDelay: "0.5s",
              }}
            >
              <a href="https://github.com/Smiyu-web">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li
              className="pl-4"
              style={{
                opacity: "0",
                animation: "0.5s SlideIn forwards",
                animationDelay: "0.6s",
              }}
            >
              <a href="https://github.com/Smiyu-web">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
