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
            <Title text={"Lead UX Designer"} />
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
              Currently Lead UX
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
      <HomeContainer style={{height: `calc(100vh - 90px - 48px - 64px - 68px)`, width: '100vw'}}>
        <Box style={{
          display: "flex", 
          flex: 2, 
          border: "2px solid #fff", 
          borderLeft: "none", 
          padding: 32, 
          borderRight: 'none',
        }}>
          {/* <Image src={AboutIcon} style={{objectFit: 'cover', objectPosition: "50% 20%"}} /> */}
        </Box>
        <div style={{ display: 'flex', flex: 3, flexDirection: 'column', marginRight: 40 }}>
          <div style={{display: 'flex', flex: 1}}>
            <div style={{display: 'flex', flex: 4, flexDirection: 'column'}}>
              <Box style={{ borderBottom: "none", paddingBottom: 0 }}>
                <Title text={"Lead UX Designer"} />
              </Box>
              <Box style={{ borderTop: "none", borderBottom: "none", paddingTop: 16, flex: 10 }}>
                <TextDescription>
                Experienced UX Designer with over ten years of expertise, based in
              Yerevan, Armenia. Specializing on complicated systems and huge
              data.
                </TextDescription>
              </Box>
              <Box style={{ paddingRight: 0, borderBottom: 'none' }}>
                <TextTitled style={{fontWeight: 700, fontSize: 18, lineHeight: '22px'}}>Currently Lead UX Designer at ISAA.</TextTitled>
              </Box>
             
            </div>

            <Box style={{ display: "flex", flex: 2, padding: 0, borderBottom: 0, borderLeft: 'none' }}>
              <Socials />
            </Box>
          </div>
          <Box style={{display: 'flex', flex: 1, minHeight: 200}} />
        </div>
      </HomeContainer>
    );
  };

  return (
    <Background style={!isMobile && {display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
      <Header text={"Lead UX Designer"}  />
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container>
          <Title id="home-title"  text={"Levon Kostandyan"} hasMarginBottom />
          {renderContent()}
        </Container>
      )}
      <Footer  containerStyle={{width: '100vw', alignSelf: 'flex-end'}} />
    </Background>
  );
};
