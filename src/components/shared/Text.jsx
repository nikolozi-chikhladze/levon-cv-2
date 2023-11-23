import styled from "styled-components";

export const TextDescription = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #c1c1c1;
  margin-bottom: ${props => props?.marginBottom ?? '0px'};

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

export const TextAccent = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;
  text-decoration: ${props => props?.decoration || 'none'};
  margin-bottom: ${props => props?.marginBottom ?? '0px'};
  
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`