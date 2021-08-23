import React from "react";
import { projects } from "./projects";
import ViewTheProject from "./ViewTheProject";
import { useHistory } from "react-router-dom";

const SlideF = () => {
  const history = useHistory();

  return (
    <div className="w-full mt-20">
      {projects.map((el, index) => {
        if (index % 2 === 0) {
          return (
            <div>
              <div
                id="right"
                key={index}
                className="flex flex-col-reverse md:flex-row justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col ml-5">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight	text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.type}
                  </h4>
                  <ViewTheProject id={el.id} />
                  <br />
                </div>
                <div
                  className="relative"
                  onClick={() =>
                    history.push({
                      pathname: `workdetail/${el.id}`,
                      state: { id: `${el.id}` },
                    })
                  }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  {/* <img src={el.image} className="work_img_rec" /> */}
                  <div class="mx-auto overflow-hidden">
                    <img src={el.image} className="work_img_slide" />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <div
                id="left"
                key={index}
                className="flex flex-col-reverse md:flex-row-reverse justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col justify-end pl-5 lg:pr-14">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.type}
                  </h4>
                  <ViewTheProject id={el.id} />
                  <br />
                </div>
                <div
                  className="relative"
                  onClick={() =>
                    history.push({
                      pathname: `workdetail/${el.id}`,
                      state: { id: `${el.id}` },
                    })
                  }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  <div class="mx-auto overflow-hidden">
                    <img src={el.image} className="work_img_slide" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SlideF;
