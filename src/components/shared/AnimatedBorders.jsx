import React from "react";
import styled from "styled-components";

export const AnimatedBorders = (props) => {
  const {
    hasBorderLeft,
    hasBorderRight,
    hasBorderTop,
    hasBorderBottom,
    children,
  } = props;

  return (
    <>
      {hasBorderLeft && <LeftBorder />}
      {hasBorderRight && <RightBorder />}
      {children}
      {hasBorderTop && <TopBorder />}
      {hasBorderBottom && <BottomBorder />}
    </>
  );
};

AnimatedBorders.propTypes = {
  hasBorderLeft: Boolean,
  hasBorderRight: Boolean,
  hasBorderTop: Boolean,
  hasBorderBottom: Boolean,
  children: React.Node,
};

const VerticalBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #fff;
  animation-name: verticalAnimation;
  animation-duration: 1000ms;
`;

const TopBorder = styled.div`
  position: absolute;
  height: 2px;
  background-color: #fff;
  animation-name: horizontalAnimation;
  animation-duration: 1000ms;
  animation-delay: 750ms;
  animation-direction: normal;
  animation-fill-mode: forwards;
  top: 0px;
  left: 0px;
`;

const BottomBorder = styled.div`
  position: absolute;
  height: 2px;
  background-color: #fff;
  animation-name: horizontalAnimation;
  animation-duration: 1000ms;
  animation-delay: 750ms;
  animation-direction: normal;
  animation-fill-mode: forwards;
  bottom: 0px;
  left: 0px;
`;

const LeftBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #fff;
  animation-name: verticalAnimation;
  animation-duration: 1000ms;
  left: 0px;
  top: 0px;
`;

const RightBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #fff;
  animation-name: verticalAnimation;
  animation-duration: 1000ms;
  right: 0px;
  top: 0px;
`;
