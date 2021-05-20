import React from "react";
import BlogsObj from "./blogsObj";
import Slider from "react-slick";
import NextArrow from "../00-UI/NextArrow";
import BackArrow from "../00-UI/BackArrow";

const ListItem = BlogsObj.map((el, index) => {
  const TagList = el.tags.map((tag, index) => {
    return (
      <li key={index} className="text-xs text-gy mr-2">
        # {tag}
      </li>
    );
  });
  return (
    <div className="px-3 md:px-8 lg:px-12 overflow-hidden" key={index}>
      <p className="font-semibold text-xs text-gy mb-2">{el.date}</p>
      <img src={el.img} alt={el.title} />
      <ul>
        <li className="border-b w-14 text-xs tracking-wider my-4 pb-1">
          {el.type}
        </li>
        <ul className="flex flex-wrap mb-2">{TagList}</ul>
        <li className="font-medium text-sm md:text-xl">{el.title}</li>
      </ul>
    </div>
  );
});

const Blog = () => {
  const settings = {
    className: "center",
    nextArrow: <NextArrow type="next" />,
    prevArrow: <BackArrow type="prev" />,
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <Slider {...settings} className="my-20 slider">
      {ListItem}
    </Slider>
  );
};

export default Blog;
