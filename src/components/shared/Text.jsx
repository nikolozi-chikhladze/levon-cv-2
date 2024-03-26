import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    bottom: -10px;
  }

  75% {
    opacity: 0;
    bottom: -10px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
`;

export const TextDescription = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #c1c1c1;
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (min-width: 481px) {
    font-size: 16px;
    line-height: 26px;

    /* &:hover {
      cursor: pointer;
    } */
  }
`;

export const TextTitled = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  /* animation: ${fadeIn} 2500ms linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media (min-width: 481px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TextAccent = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;
  text-decoration: ${(props) => props?.decoration || "none"};
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TextRegular = styled.p`
  font-family: "Helvetica Neue", serif;
  color: #fff;
  text-decoration: ${(props) => props?.decoration || "none"};
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TextTitledBold = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;
  text-decoration: ${(props) => props?.decoration || "none"};
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }

  @media (min-width: 481px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const TextGroupTitle = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const TextGroupDivider = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  font-weight: bold;

  position: relative;
  /* animation: ${fadeIn} 2s linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;
`;

export const WorkPaginationText = styled(NavLink)`
  font-family: "Helvetica Neue", serif;
  color: ${(props) => (props?.isDisabled ? "#d9d9d9" : "#fff")};
  flex: 0.5;
  display: flex;
  justify-content: center;
  text-decoration: none;

  position: relative;
  /* animation: ${fadeIn} 4000ms linear normal; */
  animation-name: ${fadeIn};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    padding: 30px 0;
  }

  @media (min-width: 481px) {
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    padding: 35px 32px;
  }
`;
