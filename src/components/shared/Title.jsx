import styled from "styled-components";

export const TitleContainer = styled.div`
  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const TitleText = styled.h1`
  font-family: "Helvetica Neue",serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }
`

export const Title = ({text, hasMarginBottom = false}) => {
    return hasMarginBottom ?
        <TitleContainer>
            <TitleText>{text}</TitleText>
        </TitleContainer> :
        <TitleText>{text}</TitleText>
}
