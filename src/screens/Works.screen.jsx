import { useContext, useEffect, useRef, useState } from "react";
import { Background } from "../components/shared/Background.jsx";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { CommonContext } from "../state/Common.context.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Container } from "../components/shared/Container.jsx";
import { Box } from "../components/shared/Box.jsx";
import { WorksItem } from "../components/worksItem/WorksItem.jsx";
import { Outlet } from "react-router-dom";
import { WORKS } from "../data/works.js";
import { useWindowSize } from "../utils/useWindowSize.jsx";
import { Title } from "../components/shared/Title.jsx";
import { Image } from "../components/shared/Image.jsx";
import { AnimatedBorders } from "../components/shared/AnimatedBorders.jsx";

export const WorksScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const [hoveredWorkItem, setHoveredWorkItem] = useState(WORKS[0]);

  const onHover = (id) => {
    setHoveredWorkItem(WORKS.find((i) => i.id === id));
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [worksListHeight, setworksListHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const headerRef = document.getElementById("header");
  const titleRef = document.getElementById("works-title");
  const footerRef = document.getElementById("footer");
  const worksListRef = useRef(null);

  useEffect(() => {
    if (headerRef && headerRef?.offsetHeight) {
      setHeaderHeight(headerRef.offsetHeight);
    }
    if (footerRef && footerRef?.offsetHeight) {
      setFooterHeight(footerRef.offsetHeight);
    }
    if (titleRef && titleRef?.offsetHeight) {
      setTitleHeight(titleRef.offsetHeight);
    }
    if (worksListRef.current && worksListRef.current?.offsetHeight) {
      setworksListHeight(worksListRef.current.offsetHeight);
    }
  }, [
    footerRef,
    footerRef?.offsetHeight,
    headerRef,
    headerRef?.offsetHeight,
    titleRef,
    titleRef?.offsetHeight,
    worksListRef.current?.offsetHeight,
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const renderContent = () => {
    if (isMobile) {
      return isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container style={{ width: "100%" }}>
          {WORKS.map((item, idx) => (
            <Box key={item.id} hasPadding={false}>
              <AnimatedBorders
                hasBorderLeft
                hasBorderRight
                hasBorderTop
                hasBorderBottom={idx + 1 === WORKS.length}
              >
                <WorksItem text={item.title} id={item.id} />
              </AnimatedBorders>
            </Box>
          ))}
        </Container>
      );
    }

    return (
      <Container style={{ maxHeight: "100vh" }}>
        <Title text={"Levon Konstandyan"} hasMarginBottom id="works-title" />
        <div
          style={{
            display: "flex",
            height: `calc(100vh - ${headerHeight}px - ${
              footerHeight * 2
            }px - ${titleHeight}px)`,
            position: "relative",
            left: -80,
          }}
        >
          <AnimatedBorders hasBorderTop hasBorderBottom>
            <Box
              style={{
                display: "flex",
                flex: 1,
                padding: 16,
                height: "fit-content",
                paddingBottom: 32,
              }}
            >
              {hoveredWorkItem && showImage ? (
                <Image
                  src={hoveredWorkItem?.cover}
                  style={{
                    height: worksListHeight - 32,
                    objectPosition: "0% 0%",
                  }}
                />
              ) : null}
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
              id="works-list"
              ref={worksListRef}
            >
              {WORKS.map((item, idx) => (
                <Box
                  key={item.id}
                  hasPadding={false}
                  style={{ margin: 0, padding: 0, borderBottom: 0 }}
                >
                  <AnimatedBorders
                    hasBorderRight
                    hasBorderLeft
                    hasBorderBottom={idx + 1 !== WORKS.length}
                  >
                    <WorksItem
                      text={item.title}
                      id={item.id}
                      onHover={onHover}
                      isPreSelected={hoveredWorkItem?.id === item.id}
                    />
                  </AnimatedBorders>
                </Box>
              ))}
            </div>
          </AnimatedBorders>
        </div>
      </Container>
    );
  };
  return (
    <Background
      style={
        isMobile && {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }
      }
    >
      <Header text={"Lead UX Designer"} />
      <Outlet />
      {renderContent()}
      <Footer
        containerStyle={{
          width: "100vw",
          alignSelf: "flex-end",
        }}
      />
    </Background>
  );
};
