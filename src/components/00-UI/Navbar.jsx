import React from "react";

const menus = [
  { link: "#about", text: "WHO I AM" },
  { link: "#works", text: "WORKS" },
  { link: "#blogs", text: "BLOGS" },
  { link: "#footer", text: "CONTACT" },
];

const ListItem = menus.map((menu, index) => {
  return (
    <li className="nav" key={index}>
      <a href={menu.link} key={index}>
        {menu.text}
      </a>
    </li>
  );
});

const Navbar = () => {
  return (
    <div
      className="fixed z-50 text-left bottom-0 left-0 mb-12 ml-12"
      data-aos="fade-right"
    >
      <nav className="lg:w-15 all:hidden lg:block">
        <ul className="cursor-pointer">{ListItem}</ul>
        <hr className="w-8 my-4 text-gy" />
        <ul>
          <li className="nav cursor-pointer">Github</li>
          <li className="nav cursor-pointer">LinkedIn</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
