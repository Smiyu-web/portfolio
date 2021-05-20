import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  .btnarrow4 {
    /*矢印と下線の基点とするためrelativeを指定*/
    position: relative;
    /*形状*/
    display: inline-block;
    padding: 0 20px;
    color: white;
    text-decoration: none;
    outline: none;
  }

  /*矢印と下線の形状*/
  .btnarrow4::before {
    content: "";
    /*絶対配置で下線の位置を決める*/
    position: absolute;
    bottom: -8px;
    left: 15%;
    /*下線の形状*/
    width: 85%;
    height: 1px;
    background: white;
    /*アニメーションの指定*/
    transition: all 0.3s;
  }

  .btnarrow4::after {
    content: "";
    /*絶対配置で矢印の位置を決める*/
    position: absolute;
    bottom: -3px;
    right: 0;
    /*矢印の形状*/
    width: 15px;
    height: 1px;
    background: white;
    transform: rotate(35deg);
    /*アニメーションの指定*/
    transition: all 0.3s;
  }

  /*hoverした際の移動*/
  .btnarrow4:hover::before {
    left: 20%;
  }

  .btnarrow4:hover::after {
    right: -5%;
  }
`;

const ViewArrow = (props) => {
  return (
    <Arrow>
      <a href={props.url} className="btnarrow4 text-xs tracking-wider">
        &nbsp;&nbsp;&nbsp;View more&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
    </Arrow>
  );
};

export default ViewArrow;
