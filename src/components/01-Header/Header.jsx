import React from "react";

const Header = () => {
  return (
    <div id="header" className="layout layout_h">
      <div className="pl-100 pt-300 md:pt-100">
        <div>
          <h1 className="mb-8">miyu</h1>
          <h1 className="pl-200">setoyama</h1>
        </div>
        <h4 className="font-medium pl-200 pt-5">
          Front End <span className="border_bottom">Developer</span>
          <br />
          Base in Vancouver. Born in Japan.
        </h4>
      </div>
      <div id="line" className="line bottom-0 left-300" />
    </div>
  );
};

export default Header;
