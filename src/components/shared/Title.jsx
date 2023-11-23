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
  margin-bottom: ${props => props?.marginBottom ?? '0px'};

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 39px;
  }
`

export const Title = ({text, hasMarginBottom = false, marginBottom}) => {
    return hasMarginBottom ?
        <TitleContainer>
            <TitleText marginBottom={marginBottom}>{text}</TitleText>
        </TitleContainer> :
        <TitleText marginBottom={marginBottom}>{text}</TitleText>
}
