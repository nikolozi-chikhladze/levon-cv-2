import styled from "styled-components";

export const TextDescription = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #c1c1c1;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const TextTitled = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  };
`;