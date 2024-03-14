import { FooterContainer, FooterText } from "./Footer.styles.jsx";

export const Footer = ({containerStyle}) => {
  return (
    <FooterContainer style={containerStyle}>
      <FooterText>Levon Kostandyan</FooterText>
      <FooterText>© 2023</FooterText>
    </FooterContainer>
  );
};
