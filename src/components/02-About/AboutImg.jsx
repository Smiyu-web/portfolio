import React from "react";
import styled from "styled-components";
import miyu from "../../images/miyuBK.jpg";

const Rec = styled.div`
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  z-index: 20;
`;

const AboutImg = () => {
  return (
    <div className="relative h-64 md:h-72 lg:pl-4 mt-8 lg:w-1/2">
      <Rec className="aboutImg h-52 md:h-80 lg:h-88 lg:top-16 right-10 md:right-24 lg:left-16" />
      <img
        className="aboutImg top-6 md:top-12 lg:top-28 right-4 md:right-14 lg:right-8 lg:left-32 "
        src={miyu}
        alt="miyu"
      />
    </div>
  );
};

export default AboutImg;
