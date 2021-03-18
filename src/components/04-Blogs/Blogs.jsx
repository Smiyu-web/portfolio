import React from "react";
import Blog from "./Blog";
import Title from "../00-UI/Title";

const Blogs = () => {
  const no = "03";
  const title = "blogs";
  return (
    <div className="layout layout_two">
      <div id="line" className="line top-0 right-400"></div>
      <Title className="pl-500" no={no} title={title} />
      <h3 className="font-medium my-20">
        Catch up <span className="border_b">what</span> is going on!
      </h3>
      <Blog />
    </div>
  );
};

export default Blogs;
