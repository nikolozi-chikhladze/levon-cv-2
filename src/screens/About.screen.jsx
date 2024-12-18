import { useContext, useEffect, useRef, useState } from "react";
import { Background } from "../components/shared/Background.jsx";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { CommonContext } from "../state/Common.context.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Container, HomeContainer } from "../components/shared/Container.jsx";
import { Title } from "../components/shared/Title.jsx";
import AboutIcon from "/public/about.png?react";
import About2Icon from "/public/about-2.png?react";
import { Box } from "../components/shared/Box.jsx";
import { TextAccent, TextDescription } from "../components/shared/Text.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { WorkTemplate } from "../components/shared/WorkTemplate.jsx";
import { Image } from "../components/shared/Image.jsx";
import { EXPERIENCE } from "../data/experience.js";
import { useWindowSize } from "../utils/useWindowSize.jsx";
import cvPdf from "/public/files/CV_Levon_Kostandian.pdf";
import { AnimatedBorders } from "../components/shared/AnimatedBorders.jsx";

export const AboutScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const textContainerRef = useRef(null);

  useEffect(() => {
    setHeight(textContainerRef.current?.clientHeight);
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [showImage, setShowImage] = useState(false);

  const [height, setHeight] = useState(0);
  const [secondSegmentHeight, setSecondSegmentHeight] = useState(0);

  const secondSegmentRef = document.getElementById("second-segment");

  useEffect(() => {
    setSecondSegmentHeight(secondSegmentRef?.offsetHeight);
  }, [secondSegmentRef?.offsetHeight]);

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <Container style={{ padding: 0 }}>
            {/* <Title text={"Levon Kostandyan"} hasMarginBottom /> */}
            <Image
              className="animate__animated animate__fadeInLeft"
              src={AboutIcon}
            />
            <Box>
              <AnimatedBorders
                hasBorderBottom
                hasBorderTop
                hasBorderRight
                hasBorderLeft
              >
                <Title text={"About"} />
              </AnimatedBorders>
            </Box>
            <Box>
              <AnimatedBorders hasBorderLeft hasBorderRight hasBorderBottom>
                <TextDescription>
                  Hello, my name is Levon, and I am thrilled to introduce myself
                  as a highly skilled UX Designer with over 10 years of
                  experience in the industry. Throughout my career, I have
                  developed a deep commitment to creating and maintaining design
                  process that elevate user experience and deliver visual
                  consistency across a wide range of businesses.
                </TextDescription>
                <br />
                <TextDescription>
                  My expertise in UX design has been honed through my work with
                  both digital agencies and large international technology
                  companies. This diverse range of experiences has equipped me
                  with the skills needed to tackle complex design challenges and
                  deliver innovative solutions that meet the unique needs of
                  each client. My approach to UX design is rooted in a deep
                  understanding of user behavior, coupled with a passion for
                  creating intuitive and engaging user experiences. Whether I am
                  working on a website, mobile app, or other digital platform, I
                  always strive to deliver a design that not only looks great
                  but also meets the needs of the end-user. In addition to my
                  extensive experience in UX design, I am also highly skilled in
                  project management, team leadership, and stakeholder
                  communication. I understand the importance of working
                  collaboratively with clients and stakeholders to ensure that
                  the final product meets their needs and exceeds their
                  expectations.
                </TextDescription>
              </AnimatedBorders>
            </Box>
            <Box>
              <AnimatedBorders hasBorderLeft hasBorderRight hasBorderBottom>
                <a href={cvPdf} download="CV_Levon_Kostandian">
                  <TextAccent decoration={"underline"}>Download CV</TextAccent>
                </a>
              </AnimatedBorders>
            </Box>
            <Box>
              <AnimatedBorders hasBorderLeft hasBorderRight hasBorderBottom>
                <Socials />
              </AnimatedBorders>
            </Box>
          </Container>

          <Container style={{ padding: 0 }} disablePaddingTop>
            <Title
              text={"Experience"}
              hasMarginBottom
              containerStyle={{ marginTop: 24 }}
            />
            {EXPERIENCE.map((item, idx) => (
              <WorkTemplate
                key={`work-template-${idx}`}
                item={item}
                isLast={idx + 1 === EXPERIENCE.length}
              />
            ))}
          </Container>
        </>
      );
    }

    return (
      <>
        {/* 8 col 4 row */}
        <HomeContainer style={{ left: -40 }}>
          <AnimatedBorders hasBorderTop hasBorderBottom hasBorderRight>
            <Box
              style={{
                // minHeight: `calc(100vh - 90px - 48px)`,
                height,
                display: "flex",
                flex: 3,
                padding: 32,
              }}
            >
              <AnimatedBorders hasBorderRight>
                {showImage && (
                  <Image
                    className="animate__animated animate__fadeInLeft"
                    src={About2Icon}
                    style={{ height: secondSegmentHeight }}
                  />
                )}
              </AnimatedBorders>
            </Box>

            <div
              // style={{gridArea: "1 / 3 / 4 / 7"}}
              style={{ display: "flex", flex: 4, flexDirection: "column" }}
              id="second-segment"
            >
              <Box style={{ height: "100%", flex: 20, borderBottom: "none" }}>
                <AnimatedBorders hasBorderRight>
                  <Title text={"About"} />
                  <TextDescription style={{ marginTop: 16 }}>
                    Hello, my name is Levon, and I am thrilled to introduce
                    myself as a highly skilled UX Designer with over 10 years of
                    experience in the industry. Throughout my career, I have
                    developed a deep commitment to creating and maintaining
                    design process that elevate user experience and deliver
                    visual consistency across a wide range of businesses.
                    <br />
                    <br />
                    My expertise in UX design has been honed through my work
                    with both digital agencies and large international
                    technology companies. This diverse range of experiences has
                    equipped me with the skills needed to tackle complex design
                    challenges and deliver innovative solutions that meet the
                    unique needs of each client.
                    <br />
                    <br />
                    My approach to UX design is rooted in a deep understanding
                    of user behavior, coupled with a passion for creating
                    intuitive and engaging user experiences. Whether I am
                    working on a website, mobile app, or other digital platform,
                    I always strive to deliver a design that not only looks
                    great but also meets the needs of the end-user.
                    <br />
                    <br />
                    In addition to my extensive experience in UX design, I am
                    also highly skilled in project management, team leadership,
                    and stakeholder communication. I understand the importance
                    of working collaboratively with clients and stakeholders to
                    ensure that the final product meets their needs and exceeds
                    their expectations.
                  </TextDescription>
                </AnimatedBorders>
              </Box>

              <Box
                style={{
                  height: "100%",
                  flex: 1,
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <AnimatedBorders hasBorderTop hasBorderRight>
                  <a style={{}} href={cvPdf} download="CV_Levon_Kostandian">
                    <TextAccent decoration={"underline"}>
                      Download CV
                    </TextAccent>
                  </a>
                </AnimatedBorders>
              </Box>
            </div>
            <div
              // style={{ gridArea: "1 / 7 / 5 / 8" }}
              style={{ display: "flex", flex: 2, marginRight: 40 }}
            >
              <Box style={{ padding: 0, marginBottom: 0, borderLeft: "none" }}>
                <Socials />
              </Box>
            </div>
          </AnimatedBorders>
        </HomeContainer>

        <Container disablePaddingTop>
          <Title
            text={"Experience"}
            hasMarginBottom
            containerStyle={{ marginTop: 64 }}
          />
          {EXPERIENCE.map((item, idx) => (
            <WorkTemplate
              key={`work-template-${idx}`}
              item={item}
              isLast={idx == EXPERIENCE.length - 1}
            />
          ))}
        </Container>
      </>
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
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container>
          <AnimatedBorders hasBorderBottom>
            <Title text={"Levon Kostandyan"} hasMarginBottom />
            {renderContent()}
          </AnimatedBorders>
        </Container>
      )}
      <Footer containerStyle={{ width: "100vw", alignSelf: "flex-end" }} />
    </Background>
  );
};
