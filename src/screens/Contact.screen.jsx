import { useContext } from "react";
import { Background } from "../components/shared/Background.jsx";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { CommonContext } from "../state/Common.context.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Box } from "../components/shared/Box.jsx";
import { TextDescription, TextTitled } from "../components/shared/Text.jsx";
import { Container, HomeContainer } from "../components/shared/Container.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { Title } from "../components/shared/Title.jsx";
import { useWindowSize } from "../utils/useWindowSize.jsx";

export const ContactScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <Box>
            <TextDescription>
              I am always excited to meet new people, whether for work or
              personal reasons. If you have any questions, comments, or would
              want to discuss future opportunities, please contact me through
              the following channels:
            </TextDescription>
          </Box>
          <Box>
            <TextTitled>Mail:</TextTitled>
            <TextDescription>levon.kostandyan@gmail.com</TextDescription>
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
          style={{ gridArea: "1 / 1 / 4 / 2", border: "2px solid #fff" }}
        ></div>
        <div
          style={{ gridArea: "2 / 2 / 4 / 4", border: "2px solid #fff" }}
        ></div>
        <div style={{ gridArea: "1 / 2 / 2 / 3" }}>
          <Box style={{ borderBottom: "none" }}>
            <Title text={"Contact"} />
          </Box>
          <Box style={{ borderTop: "none", borderBottom: "none" }}>
            <TextDescription>
              I am always excited to meet new people, whether for work or
              personal reasons. If you have any questions, comments, or would
              want to discuss future opportunities, please contact me through
              the following channels:
            </TextDescription>
          </Box>
          <Box style={{ borderTop: "none" }}>
            <TextDescription style={{ paddingBottom: "12px" }}>
              levon.kostandyan@gmail.com
            </TextDescription>
            <TextDescription style={{ paddingBottom: "12px" }}>
              +374 91 017868
            </TextDescription>
          </Box>
        </div>
        <div style={{ gridArea: "1 / 3 / 2 / 4" }}>
          <Box style={{ height: "100%", padding: 0, borderBottom: 0 }}>
            <Socials />
          </Box>
        </div>
      </HomeContainer>
    );
  };

  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container>
          <Title text={"Contact"} hasMarginBottom />
          {renderContent()}
        </Container>
      )}
      <Footer />
    </Background>
  );
};
