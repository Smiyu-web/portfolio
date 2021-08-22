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
                className="md:flex justify-between my-20 mx-10"
              >
                <div className="flex flex-col ml-5">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight	text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
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
                >
                  {/* <div
                    id="img_bg"
                    className="bg-white opacity-70 h-40rem w-40rem"
                  ></div> */}
                  <img src={el.image} className="opacity-20 h-40rem w-40rem" />
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
                className="md:flex flex-row-reverse justify-between my-20 mx-10"
              >
                <div className="flex flex-col justify-end pr-14">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight	text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="500"
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
                >
                  <div
                    id="img_bg"
                    className="bg-white opacity-70 h-40rem w-40rem"
                  ></div>
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
