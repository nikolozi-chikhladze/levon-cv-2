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
        <Box style={{display: "flex", flex: 2, border: "2px solid #fff", borderLeft: "none"}} />
        <div style={{ display: 'flex', flex: 3, flexDirection: 'column', marginRight: 40 }}>
          <div style={{display: 'flex', flex: 1}}>
            <div style={{display: 'flex', flex: 4, flexDirection: 'column'}}>
              <Box style={{ borderBottom: "none" }}>
                <Title text={"Senior UX Designer"} />
              </Box>
              <Box style={{ borderTop: "none", borderBottom: "none" }}>
                <TextDescription>
                Experienced UX Designer with over ten years of expertise, based in
              Yerevan, Armenia. Specializing on complicated systems and huge
              data.
                </TextDescription>
              </Box>
              <Box style={{ paddingRight: 0 }}>
                <TextTitled>Currently Senior UX Designer at ISAA.</TextTitled>
              </Box>
             
            </div>

            <Box style={{ display: "flex", flex: 2, padding: 0, borderBottom: 0 }}>
              <Socials />
            </Box>
          </div>
          <Box style={{display: 'flex', flex: 1, minHeight: 200}} />
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
          <Title text={"Levon Kostandyan"} hasMarginBottom />
          {renderContent()}
        </Container>
      )}
      <Footer />
    </Background>
  );
};
