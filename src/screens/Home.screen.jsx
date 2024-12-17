import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Background } from "../components/shared/Background.jsx";
import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../state/Common.context.jsx";
import { Box } from "../components/shared/Box.jsx";
import { Container, HomeContainer } from "../components/shared/Container.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { Title } from "../components/shared/Title.jsx";
import { TextDescription, TextTitled } from "../components/shared/Text.jsx";
import { useWindowSize } from "../utils/useWindowSize.jsx";
import { AnimatedBorders } from "../components/shared/AnimatedBorders.jsx";
import { Logo3D } from '../components/shared/3DLogo.jsx'

export const HomeScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const [headerHeight, setHeaderHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const headerRef = document.getElementById("header");
  const titleRef = document.getElementById("home-title");
  const footerRef = document.getElementById("footer");

  useEffect(() => {
    setHeaderHeight(headerRef?.offsetHeight);
    setTitleHeight(titleRef?.offsetHeight);
    setFooterHeight(footerRef?.offsetHeight);
  }, [
    footerRef?.offsetHeight,
    headerRef?.offsetHeight,
    titleRef?.offsetHeight,
  ]);

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <Box style={{ borderBottom: "none" }}>
            <AnimatedBorders
              hasBorderLeft
              hasBorderTop
              hasBorderBottom
              hasBorderRight
            >
              <Title text={"Lead UX Designer"} />
            </AnimatedBorders>
          </Box>
          <Box style={{ borderTop: "none" }}>
            <AnimatedBorders hasBorderLeft hasBorderRight>
              <TextDescription>
                Experienced UX Designer with over ten years of expertise, based
                in Yerevan, Armenia. Specializing on complicated systems and
                huge data.
              </TextDescription>
            </AnimatedBorders>
          </Box>
          <Box>
            <AnimatedBorders
              hasBorderLeft
              hasBorderTop
              hasBorderBottom
              hasBorderRight
            >
              <TextTitled>
                Currently Lead UX
                <br /> Designer at ISAA.
              </TextTitled>
            </AnimatedBorders>
          </Box>
          <Box>
            <AnimatedBorders hasBorderLeft hasBorderBottom hasBorderRight>
              <Socials />
            </AnimatedBorders>
          </Box>
        </>
      );
    }

    return (
      <HomeContainer
        style={{
          height: `calc(100vh - ${headerHeight}px - ${titleHeight}px - ${
            footerHeight * 2
          }px)`,
          width: "100vw",
          left: -40,
        }}
      >
        <AnimatedBorders hasBorderBottom hasBorderTop hasBorderRight>
          <Box
            style={{
              display: "flex",
              flex: 2,
              // border: "2px solid #fff",
              borderLeft: "none",
              padding: 0,
              borderRight: "none",
            }}
          >
            <AnimatedBorders hasBorderRight />
            <Logo3D />
          </Box>
          <div
            style={{
              display: "flex",
              flex: 3,
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flex: 4,
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <AnimatedBorders hasBorderBottom hasBorderRight>
                  <Box style={{ borderBottom: "none", paddingBottom: 0 }}>
                    <Title text={"Lead UX Designer"} />
                  </Box>
                  <Box
                    style={{
                      borderTop: "none",
                      borderBottom: "none",
                      paddingTop: 16,
                      flex: 10,
                    }}
                  >
                    <TextDescription>
                      Experienced UX Designer with over ten years of expertise,
                      based in Yerevan, Armenia. Specializing on complicated
                      systems and huge data.
                    </TextDescription>
                  </Box>
                  <Box style={{ paddingRight: 0, borderBottom: "none" }}>
                    <AnimatedBorders hasBorderTop>
                      <TextTitled
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          lineHeight: "22px",
                        }}
                      >
                        Currently Lead UX Designer at ISAA.
                      </TextTitled>
                    </AnimatedBorders>
                  </Box>
                </AnimatedBorders>
              </div>
              <Box
                style={{
                  display: "flex",
                  flex: 2,
                  padding: 0,
                  borderBottom: 0,
                  borderLeft: "none",
                  paddingRight: 40,
                }}
              >
                <AnimatedBorders hasBorderBottom>
                  <Socials />
                </AnimatedBorders>
              </Box>
            </div>
            <Box style={{ display: "flex", flex: 1, minHeight: 200 }} />
          </div>
        </AnimatedBorders>
      </HomeContainer>
    );
  };

  return (
    <Background
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      <Header text={"Lead UX Designer"} />
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container>
          <Title id="home-title" text={"Levon Kostandyan"} hasMarginBottom />
          {renderContent()}
        </Container>
      )}

      <Footer containerStyle={{ width: "100vw", alignSelf: "flex-end" }} />
    </Background>
  );
};
