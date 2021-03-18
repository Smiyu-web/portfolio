import React from "react";

const menus = [
  { link: "/about", text: "WHO I AM" },
  { link: "/about", text: "WORKS" },
  { link: "/about", text: "BLOGS" },
  { link: "/about", text: "CONTACT" },
];

const ListItem = menus.map((menu, index) => {
  return (
    <li className="nav">
      <a href={menu.link} key={index}>
        {menu.text}
      </a>
    </li>
  );
});

const Navbar = () => {
  return (
    <div className="fixed text-left bottom-0 left-0 mb-6 ml-8">
      <nav className="lg:w-15 all:hidden md:block">
        <ul>{ListItem}</ul>
        <hr className="w-8 my-4" />
        <ul>
          <li className="nav">Github</li>
          <li className="nav">LinkedIn</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
