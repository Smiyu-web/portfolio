import React from "react";
import { useHistory } from "react-router-dom";
import {} from "../../";

const ViewTheResume = () => {
  const history = useHistory();
  return (
    <div className="ml-5" data-aos="fade-up" data-aos-delay="300">
      <div className="text-sm tracking-wider">
        View resume
        <a href="/public/Resume.MiyuS.pdf">
          <div
            className="view_arrow text-xs tracking-wider"
            // onClick={() =>
            //   history.push({
            //     pathname: `workdetail/${props.id}`,
            //     state: { id: `${props.id}` },
            //   })
            // }
          >
            &rarr;
          </div>
        </a>
      </div>
    </div>
  );
};

export default ViewTheResume;
