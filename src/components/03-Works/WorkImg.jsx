import React from "react";

export const WorkImg = (props) => {
  return (
    <>
      <div className="img_bg right-6" data-aos="fade-left"></div>
      <img
        src={props.image}
        alt={props.title}
        className="work_img"
        data-aos="zoom-out"
        data-aos-delay="800"
      />
    </>
  );
};
