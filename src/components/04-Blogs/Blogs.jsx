import React from "react";
import Blog from "./Blog";
import Title from "../00-UI/Title";

const Blogs = () => {
  const no = "03";
  const title = "blogs";
  return (
    <div className="layout_wb">
      <div id="line" className="line top-0 right-400"></div>
      <Title className="pl-500" no={no} title={title} />

      <Blog />
    </div>
  );
};

export default Blogs;
