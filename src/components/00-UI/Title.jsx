import React from "react";

const Title = (props) => {
  return (
    <div className="flex font-bold md:pt-8">
      <div
        className="text-sm md:text-lg lg:text-2xl pr-5"
        data-aos="fade-right"
      >
        {props.no}/
      </div>
      <h2 data-aos="fade-right" data-aos-delay="100">
        {props.title}
      </h2>
    </div>
  );
};

export default Title;
