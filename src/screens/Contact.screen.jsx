import { useContext, useEffect, useState } from "react";
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
import { AnimatedBorders } from "../components/shared/AnimatedBorders.jsx";

export const ContactScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const [headerHeight, setHeaderHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const headerRef = document.getElementById("header");
  const titleRef = document.getElementById("contact-title");
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
          <Box>
            <AnimatedBorders hasBorderTop hasBorderLeft hasBorderRight>
              <TextDescription>
                I am always excited to meet new people, whether for work or
                personal reasons. If you have any questions, comments, or would
                want to discuss future opportunities, please contact me through
                the following channels:
              </TextDescription>
            </AnimatedBorders>
          </Box>
          <Box>
            <AnimatedBorders hasBorderTop hasBorderLeft hasBorderRight>
              <TextTitled>Mail:</TextTitled>
              <TextDescription>levon.kostandyan@gmail.com</TextDescription>
            </AnimatedBorders>
          </Box>
          <Box>
            <AnimatedBorders
              hasBorderTop
              hasBorderLeft
              hasBorderRight
              hasBorderBottom
            >
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
          left: -40,
        }}
      >
        <AnimatedBorders hasBorderTop hasBorderBottom hasBorderRight>
          <Box
            style={{
              display: "flex",
              flex: 2,
            }}
          >
            <AnimatedBorders hasBorderRight />
          </Box>
          <div
            style={{
              display: "flex",
              flex: 3,
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flex: 1, position: "relative" }}>
              <AnimatedBorders hasBorderBottom>
                <div
                  style={{
                    display: "flex",
                    flex: 4,
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <AnimatedBorders hasBorderRight>
                    <Box style={{ borderBottom: "none" }}>
                      <Title text={"Contact"} />
                    </Box>
                    <Box style={{ borderTop: "none", borderBottom: "none" }}>
                      <TextDescription>
                        I am always excited to meet new people, whether for work
                        or personal reasons. If you have any questions,
                        comments, or would want to discuss future opportunities,
                        please contact me through the following channels:
                      </TextDescription>
                    </Box>
                    <Box style={{ borderTop: "none", borderBottom: "none" }}>
                      <TextDescription style={{ paddingBottom: "12px" }}>
                        levon.kostandyan@gmail.com
                      </TextDescription>
                      <TextDescription style={{ paddingBottom: "12px" }}>
                        +374 91 017868
                      </TextDescription>
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
                  }}
                >
                  <Socials />
                </Box>
              </AnimatedBorders>
            </div>
            <Box style={{ display: "flex", flex: 1, minHeight: 230 }} />
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
          <Title text={"Contact"} hasMarginBottom id="contact-title" />
          {renderContent()}
        </Container>
      )}
      {/* <div style={{position: 'absolute', bottom: 0, width: '100%'}}> */}
      <Footer containerStyle={{ width: "100vw", alignSelf: "flex-end" }} />
      {/* </div> */}
    </Background>
  );
};
