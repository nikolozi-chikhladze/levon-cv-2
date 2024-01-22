import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    bottom: -10px;
  }

  50% {
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
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (min-width: 481px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const TextTitled = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

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
  animation: ${fadeIn} 2s linear normal;

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
  animation: ${fadeIn} 2s linear normal;

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
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const TextGroupTitle = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

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
  animation: ${fadeIn} 2s linear normal;
`;

export const WorkPaginationText = styled(NavLink)`
  font-family: "Helvetica Neue", serif;
  color: ${(props) => (props?.isDisabled ? "#d9d9d9" : "#fff")};
  flex: 0.5;
  display: flex;
  justify-content: center;
  text-decoration: none;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    padding: 30px 0;
    border: 2px solid #fff;
  }
`;
