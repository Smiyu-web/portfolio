import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  a {
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
  a:hover {
    transform: scale(1.1);
  }
`;

const ViewArrow = (props) => {
  return (
    <Arrow className="mt-10" data-aos="fade-up" data-aos-delay="300">
      <h5 className="tracking-wider">
        View the Github
        <a
          href={props.git}
          target="_blank"
          rel="noopener noreferrer"
          className="btnarrow4 text-xs tracking-wider"
        >
          &rarr;
        </a>
      </h5>
    </Arrow>
  );
};

export default ViewArrow;
