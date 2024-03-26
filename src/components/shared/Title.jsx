import styled from "styled-components";
import PropTypes from "prop-types";
import { fadeIn } from "./Text";

export const TitleContainer = styled.div`
  @media (max-width: 480px) {
    margin-bottom: 32px;
  }

  @media (min-width: 481px) {
    margin: 32px;
  }
`;

export const TitleText = styled.h1`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;
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
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Title = ({
  text,
  hasMarginBottom = false,
  marginBottom,
  id,
  containerStyle,
}) => {
  return hasMarginBottom ? (
    <TitleContainer id={id} style={containerStyle}>
      <TitleText marginBottom={marginBottom}>{text}</TitleText>
    </TitleContainer>
  ) : (
    <TitleText marginBottom={marginBottom} id={id}>
      {text}
    </TitleText>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  hasMarginBottom: PropTypes.bool,
  marginBottom: PropTypes.string,
};
