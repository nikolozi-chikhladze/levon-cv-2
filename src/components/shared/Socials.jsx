import styled from "styled-components";

export const SocialsContainer = styled.div``;

export const SocialsText = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
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
