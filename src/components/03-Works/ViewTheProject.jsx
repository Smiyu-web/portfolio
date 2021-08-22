import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Arrow = styled.div`
  div {
    color: #fff;
    font-size: 16px;
    margin: 10px 0 10px 10px;
    padding: 18px;
    border: #858585 solid 1px;
    border-radius: 50%;
    display: inline-block;
    transition: 0.3s;
    cursor: pointer;
  }
  div:hover {
    transform: scale(1.1);
  }
`;

const ViewTheProject = (props) => {
  const history = useHistory();
  return (
    <Arrow className="mt-10" data-aos="fade-up" data-aos-delay="300">
      <h5 className="tracking-wider">
        View The Project
        <div
          className="btnarrow4 text-xs tracking-wider"
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
    </Arrow>
  );
};

export default ViewTheProject;
