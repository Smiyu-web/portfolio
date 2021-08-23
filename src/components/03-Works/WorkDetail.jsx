import React from "react";
import { findWork } from "./projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const WorkDetail = (props) => {
  const workId = props.location.state.id;
  const work = findWork(workId);
  console.log(work);

  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="mb-10 font-meddon" data-aos="fade-up">
          {work.title}
        </h3>
      </div>
      <div className="flex justify-center">
        <img src={work.imageD} alt={work.title} className="w-60vw" />
      </div>
      <div className="flex justify-center">
        <a href={work.git} className="detail_link">
          <FontAwesomeIcon icon={faLaptopCode} size="lg" />
          <h6 className="ml-1">github</h6>
        </a>
        <a href={work.url} className="detail_link">
          <FontAwesomeIcon icon={faLaptop} size="lg" />
          <h6 className="ml-1">site</h6>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3>About</h3>
        <h5 className="w-60vw my-10 text-center">{work.about}</h5>
        <div>
          <ul className="flex flex-wrap">
            {work.langs.map((lang, index) => {
              return (
                <li className="lang_li bg-gray-700 mx-1" key={index}>
                  {lang}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
