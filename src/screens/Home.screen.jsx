import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Background } from "../components/shared/Background.jsx";
import { useContext } from "react";
import { CommonContext } from "../state/Common.context.jsx";
import { Box } from "../components/shared/Box.jsx";
import { Container } from "../components/shared/Container.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { Title } from "../components/shared/Title.jsx";
import { TextDescription, TextTitled } from "../components/shared/Text.jsx";

export const HomeScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      {!isHeaderOpen ? (
        <Container>
          <Title text={"Levon Kostandyan"} hasMarginBottom />
          <Box>
            <Title text={"Senior UX Designer"} />
          </Box>
          <Box>
            <TextDescription>
              Experienced UX Designer with over ten years of expertise, based in
              Yerevan, Armenia. Specializing on complicated systems and huge
              data.
            </TextDescription>
          </Box>
          <Box>
            <TextTitled>
              Currently Senior UX
              <br /> Designer at ISAA.
            </TextTitled>
          </Box>
          <Box>
            <Socials />
          </Box>
        </Container>
      ) : (
        <MobileMenu />
      )}
      <Footer />
    </Background>
  );
};
