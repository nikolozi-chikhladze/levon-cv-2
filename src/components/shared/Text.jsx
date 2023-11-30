import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TextDescription = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #c1c1c1;
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const TextTitled = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const TextAccent = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;
  text-decoration: ${(props) => props?.decoration || "none"};
  margin-bottom: ${(props) => props?.marginBottom ?? "0px"};

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

  @media (max-width: 480px) {
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

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const TextGroupTitle = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

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
`;

export const WorkPaginationText = styled(NavLink)`
  font-family: "Helvetica Neue", serif;
  color: ${(props) => (props?.isDisabled ? "#d9d9d9" : "#fff")};
  flex: 0.5;
  display: flex;
  justify-content: center;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    padding: 30px;
    border: 2px solid #fff;
  }
`;
