import React from "react";
import { useHistory } from "react-router-dom";

const ViewTheResume = (props) => {
  const history = useHistory();
  return (
    <div className="ml-5" data-aos="fade-up" data-aos-delay="300">
      <h5 className="tracking-wider">
        View resume
        <div
          className="view_arrow text-xs tracking-wider"
          onClick={() =>
            history.push({
              pathname: `workdetail/${props.id}`,
              state: { id: `${props.id}` },
            })
          }
        >
          &rarr;
        </div>
      </h5>
    </div>
  );
};

export default ViewTheResume;
