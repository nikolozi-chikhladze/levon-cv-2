import styled from "styled-components";
import { fadeIn } from "../shared/Text";

export const WorksItemTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isFocused ? "#fff" : "none")};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 16px 20px;
  }

  @media (min-width: 481px) {
    /* max-height: 80px; */
    /* padding: 28px 0px 32px 29px; */
    padding-left: 28px;
    height: 100%;

    
  }
`;

export const WorksItemText = styled.p`
  font-family: "Helvetica Neue", serif;
  color: ${(props) => props.color || "#fff"};
  font-weight: bold;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
