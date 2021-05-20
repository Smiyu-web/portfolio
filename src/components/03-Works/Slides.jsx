import React from "react";
import Projects from "./projects";
import ViewGit from "./ViewGit";

const ListProject = Projects.map((el, index) => {
  if (index % 2 === 0) {
    // right
    return (
      <div id="right" className="work_right" key={index}>
        <div className="md:w-72 xl:w-96 md:ml-12 mt-10 text-center md:text-left inset-0 my-auto">
          <h3 className="mb-10 font-meddon" data-aos="fade-up">
            {el.title}
          </h3>
          <h6 className="text-gy mb-3" data-aos="fade-up" data-aos-delay="100">
            {el.partner}
          </h6>
          <h6
            className="font-semibold tracking-wider"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {el.langs}
          </h6>
          <ViewGit git={el.git} />
          <br />
        </div>
        <div className="img_wrapper  md:left-10">
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            <div id="img_bg" className="img_bg" data-aos="fade-left"></div>
            <img
              src={el.image}
              alt={el.title}
              className="work_img"
              data-aos="zoom-out"
              data-aos-delay="200"
            />
          </a>
          <div className="absolute overflow-hidden right-0 -bottom-6 text-gy flex items-center">
            <hr id="line" className="bg-wh w-20 h-px"></hr>
            <h6 className="ml-4">{el.type}</h6>
          </div>
        </div>
      </div>
    );
  } else {
    // left
    return (
      <div id="right" className="work_left" key={index}>
        <div className="img_wrapper md:left-10 lg:left-0">
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            <div id="img_bg" className="img_bg" data-aos="fade-left"></div>
            <img
              src={el.image}
              alt={el.title}
              className="work_img"
              data-aos="zoom-out"
              data-aos-delay="200"
            />
          </a>
          <div className="absolute overflow-hidden right-0 -bottom-6 text-gy flex items-center">
            <hr id="line" className="bg-wh w-20 h-px"></hr>
            <p className="ml-4">{el.type}</p>
          </div>
        </div>
        <div className="md:w-72 xg:w-96 md:ml-24 mt-10 text-center md:text-left inset-0 my-auto">
          <h3 className="mb-10 font-meddon" data-aos="fade-up">
            {el.title}
          </h3>
          <h6 className="text-gy mb-3" data-aos="fade-up" data-aos-delay="100">
            {el.partner}
          </h6>
          <h6
            className="font-semibold tracking-wider"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {el.langs}
          </h6>
          <ViewGit git={el.git} />
          <br />
        </div>
      </div>
    );
  }
});
const Slides = () => {
  return <div className="w-full">{ListProject}</div>;
};

export default Slides;
