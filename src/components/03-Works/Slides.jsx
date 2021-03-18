import React from "react";
import styled from "styled-components";
import premiere from "../../images/premiere.png";
import yuco from "../../images/yuco.png";
import am from "../../images/11am.png";

const Wrapper = styled.div`
  img {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  }
  span {
    color: rgba(0, 0, 0, 0);
    background-size: 150px;
    -webkit-background-clip: text;
  }

  #premiere {
    background-image: url(${premiere});
  }
  #yuco {
    background-image: url(${yuco});
    background-size: 20px;
  }

  #am {
    background-image: url(${am});
    background-size: 30px;
  }
`;

const projects = [
  { title: "PREMIERE", id: "premiere", image: premiere, type: "E-commerce" },
  { title: "yu + co.", id: "yuco", image: yuco, type: "website" },
  { title: "11am", id: "am", image: am, type: "website" },
];

const ListProject = projects.map((el, index) => {
  if (index % 2 === 0) {
    return (
      <Wrapper id="wrapper" className="slide_wrapper ml-6 lg:ml-10" key={index}>
        <div className="img_bg"></div>
        <img
          src={el.image}
          alt={el.title}
          className="work_img left-6 lg:left-8"
        />
        <span id={el.id} className="work_name left-1/3 xl:left-1/4">
          {el.title}
        </span>
        <p className="work_type text-left">{el.type}</p>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper id="wrapper" className="slide_wrapper lg:mr-10" key={index}>
        <div className="img_bg right-6"></div>
        <img
          src={el.image}
          alt={el.title}
          className="work_img right-12 md:right-14"
        />
        <span id={el.id} className="work_name right-1/3 xl:right-1/4">
          {el.title}
        </span>
        <p className="work_type right-6">{el.type}</p>
      </Wrapper>
    );
  }
});

const Slides = () => {
  return <div className="w-full">{ListProject}</div>;
};

export default Slides;
