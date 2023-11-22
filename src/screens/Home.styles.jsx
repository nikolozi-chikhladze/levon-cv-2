import styled from "styled-components";

export const HomeTitle = styled.h1`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }
`

export const HomeTitleContainer = styled.div`
  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const HomeContainer = styled.div`
  @media (max-width: 480px) {
    padding: 32px;
  }
`;

export const HomeTextSummary = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const HomeBox = styled.div`
  padding: 16px 18px;
  border: 2px solid #fff;
  border-bottom: none;
  
  &:last-child {
    border-bottom: 2px solid #fff;
  }
`

export const HomeTextPosition = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  };
`;


export const HomeSocialsContainer = styled.div``;

export const HomeTextSocial = styled.p`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  };
`;

