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
      <HomeContainer
        style={{
          height: `calc(100vh - ${headerHeight}px - ${titleHeight}px - ${
            footerHeight * 2
          }px)`,
        }}
      >
        <Box
          style={{
            display: "flex",
            flex: 2,
            border: "2px solid #fff",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 3,
            flexDirection: "column",
            marginRight: 40,
          }}
        >
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ display: "flex", flex: 4, flexDirection: "column" }}>
              <Box style={{ borderBottom: "none" }}>
                <Title text={"Contact"} />
              </Box>
              <Box style={{ borderTop: "none", borderBottom: "none" }}>
                <TextDescription>
                  I am always excited to meet new people, whether for work or
                  personal reasons. If you have any questions, comments, or
                  would want to discuss future opportunities, please contact me
                  through the following channels:
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
          </div>
          <Box style={{ display: "flex", flex: 1, minHeight: 230 }} />
        </div>
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
