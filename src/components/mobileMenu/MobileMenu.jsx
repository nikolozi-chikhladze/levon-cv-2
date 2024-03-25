import { Container } from "../shared/Container.jsx";
import { Box } from "../shared/Box.jsx";
import { SocialsContainer, SocialsText } from "../shared/Socials.jsx";
import { useNavigate } from "react-router-dom";
import { CommonContext } from "../../state/Common.context.jsx";
import { useCallback, useContext } from "react";
import { TextAccent } from "../shared/Text.jsx";
import { useWindowSize } from "../../utils/useWindowSize.jsx";
import { AnimatedBorders } from "../shared/AnimatedBorders.jsx";

export const MobileMenu = () => {
  const navigate = useNavigate();
  const { toggleHeader } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const navigateTo = useCallback(
    (route) => () => {
      toggleHeader();
      navigate(route);
    },
    [navigate, toggleHeader]
  );

  return (
    <Container
      style={
        isMobile && {
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }
      }
    >
      <Box
        onClick={navigateTo("/")}
        style={{ display: "flex", alignItems: "center" }}
      >
        <AnimatedBorders hasBorderTop hasBorderLeft hasBorderRight>
          <TextAccent>Home</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box
        onClick={navigateTo("/about")}
        style={{ display: "flex", alignItems: "center" }}
      >
        <AnimatedBorders hasBorderTop hasBorderLeft hasBorderRight>
          <TextAccent>About</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box
        onClick={navigateTo("/works")}
        style={{ display: "flex", alignItems: "center" }}
      >
        <AnimatedBorders hasBorderTop hasBorderLeft hasBorderRight>
          <TextAccent>Works</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box
        onClick={navigateTo("/contact")}
        style={{ display: "flex", alignItems: "center" }}
      >
        <AnimatedBorders
          hasBorderTop
          hasBorderLeft
          hasBorderRight
          hasBorderBottom
        >
          <TextAccent>Contact</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box>
        <AnimatedBorders hasBorderLeft hasBorderRight hasBorderBottom>
          <SocialsContainer>
            <SocialsText>LinkedIn</SocialsText>
            <SocialsText>Instagram</SocialsText>
            <SocialsText>Behance</SocialsText>
            <SocialsText>Dribbble</SocialsText>
          </SocialsContainer>
        </AnimatedBorders>
      </Box>
    </Container>
  );
};
