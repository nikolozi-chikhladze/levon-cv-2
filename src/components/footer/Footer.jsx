import { useWindowSize } from "../../utils/useWindowSize.jsx";
import { AnimatedBorders } from "../shared/AnimatedBorders.jsx";
import { FooterContainer, FooterText } from "./Footer.styles.jsx";

export const Footer = ({ containerStyle }) => {
  const { isMobile } = useWindowSize();
  return (
    <FooterContainer style={containerStyle} id="footer">
      {isMobile ? (
        <AnimatedBorders hasBorderTop>
          <FooterText>© 2024</FooterText>
        </AnimatedBorders>
      ) : (
        <FooterText>© 2024</FooterText>
      )}
    </FooterContainer>
  );
};
