import styled from "styled-components";
import { fadeIn } from "./Text";

export const SocialsContainer = styled.div`
  @media (min-width: 481px) {
    padding: 32px;
  }
`;

export const SocialsText = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 481px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
  }
`;

export const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsText>LinkedIn</SocialsText>
      <SocialsText>Instagram</SocialsText>
      <SocialsText>Behance</SocialsText>
      <SocialsText>Dribble</SocialsText>
    </SocialsContainer>
  );
};
