import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Background } from "../components/shared/Background.jsx";
import { useContext } from "react";
import { CommonContext } from "../state/Common.context.jsx";
import { Box } from "../components/shared/Box.jsx";
import { Container, HomeContainer } from "../components/shared/Container.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { Title } from "../components/shared/Title.jsx";
import { TextDescription, TextTitled } from "../components/shared/Text.jsx";
import { useWindowSize } from "../utils/useWindowSize.jsx";

export const HomeScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <Box style={{ borderBottom: "none" }}>
            <Title text={"Senior UX Designer"} />
          </Box>
          <Box style={{ borderTop: "none" }}>
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
        </>
      );
    }

    return (
      <HomeContainer>
        <div
          style={{ gridArea: "1 / 1 / 5 / 4", border: "2px solid #fff" }}
        ></div>
        <div
          style={{ gridArea: "2 / 4 / 5 / 9", border: "2px solid #fff" }}
        ></div>
        <div style={{ gridArea: "1 / 4 / 2 / 8" }}>
          <Box style={{ borderBottom: "none" }} paddingTop="32px">
            <Title text={"Senior UX Designer"} />
          </Box>
          <Box style={{ borderTop: "none", paddingTop: 0 }}>
            <TextDescription style={{ marginBottom: "77px" }}>
              Experienced UX Designer with over ten years of expertise, based in
              Yerevan, Armenia. Specializing on complicated systems and huge
              data.
            </TextDescription>
          </Box>
          <Box style={{ paddingRight: 0 }}>
            <TextTitled>Currently Senior UX Designer at ISAA.</TextTitled>
          </Box>
        </div>{" "}
        {isMobile ? (
          <Box>
            <Socials />
          </Box>
        ) : (
          <div style={{ gridArea: "1 / 8 / 2 / 9" }}>
            <Box style={{ height: "100%", padding: 0, borderBottom: 0 }}>
              <Socials />
            </Box>
          </div>
        )}
      </HomeContainer>
    );
  };

  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      {!isHeaderOpen ? (
        <Container>
          <Title text={"Levon Kostandyan"} hasMarginBottom />
          {renderContent()}
        </Container>
      ) : (
        <MobileMenu />
      )}
      <Footer />
    </Background>
  );
};
