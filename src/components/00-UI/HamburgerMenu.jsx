import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Div = styled.div`
  text-align: center;
  background-color: white;

  ul {
    color: black;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.2em;
  }

  h6 {
    color: black;
    font-size: 0.7em;
    font-weight: 600;
    line-height: 2.5em;
    letter-spacing: 0.3em;
  }
`;

const menus = [
  { link: "/about", text: "WHO I AM" },
  { link: "/about", text: "WORKS" },
  { link: "/about", text: "BLOGS" },
  { link: "/about", text: "CONTACT" },
];

const ListItem = menus.map((menu, index) => {
  return (
    <a href={menu.link} key={index}>
      <li className="my-8">{menu.text}</li>
    </a>
  );
});

const HamburgerMenu = () => {
  return (
    <Div className="h-screen w-screen fixed bottom-0">
      <div>
        <div className="absolute -inset-x-0 mt-40">
          <ul>{ListItem}</ul>
          <ul className="ring-black flex justify-center">
            <li className="pr-4">
              <a href="https://github.com/Smiyu-web">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="pl-4">
              <a href="https://github.com/Smiyu-web">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="absolute bottom-0 -inset-x-0">MENU</h6>
        </div>
      </div>
    </Div>
  );
};

export default HamburgerMenu;
