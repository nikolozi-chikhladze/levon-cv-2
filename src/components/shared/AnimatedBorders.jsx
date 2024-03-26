/* eslint-disable react/prop-types */
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

const TopBorder = styled.div`
  position: absolute;
  height: 2px;
  background-color: #fff;
  animation-name: horizontalAnimation;
  animation-duration: 1000ms;
  animation-delay: 1000ms;
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
  animation-delay: 1000ms;
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
