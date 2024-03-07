import { useContext } from "react";
import { Background } from "../components/shared/Background.jsx";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { CommonContext } from "../state/Common.context.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Container, HomeContainer } from "../components/shared/Container.jsx";
import { Title } from "../components/shared/Title.jsx";
import AboutIcon from "/src/assets/about.png?react";
import { Box } from "../components/shared/Box.jsx";
import { TextAccent, TextDescription } from "../components/shared/Text.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { WorkTemplate } from "../components/shared/WorkTemplate.jsx";
import { Image } from "../components/shared/Image.jsx";
import { EXPERIENCE } from "../data/experience.js";
import { useWindowSize } from "../utils/useWindowSize.jsx";

export const AboutScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <Container>
            <Title text={"Levon Kostandyan"} hasMarginBottom />
            <Image src={AboutIcon} />
            <Box>
              <Title text={"About"} />
            </Box>
            <Box>
              <TextDescription>
                Hello, my name is Levon, and I am thrilled to introduce myself
                as a highly skilled UX Designer with over 10 years of experience
                in the industry. Throughout my career, I have developed a deep
                commitment to creating and maintaining design process that
                elevate user experience and deliver visual consistency across a
                wide range of businesses.
              </TextDescription>
              <br/>
              <TextDescription>My expertise in UX design has been
                honed through my work with both digital agencies and large
                international technology companies. This diverse range of
                experiences has equipped me with the skills needed to tackle
                complex design challenges and deliver innovative solutions that
                meet the unique needs of each client. My approach to UX design
                is rooted in a deep understanding of user behavior, coupled with
                a passion for creating intuitive and engaging user experiences.
                Whether I am working on a website, mobile app, or other digital
                platform, I always strive to deliver a design that not only
                looks great but also meets the needs of the end-user. In
                addition to my extensive experience in UX design, I am also
                highly skilled in project management, team leadership, and
                stakeholder communication. I understand the importance of
                working collaboratively with clients and stakeholders to ensure
                that the final product meets their needs and exceeds their
                expectations.</TextDescription>
            </Box>
            <Box>
              <TextAccent decoration={"underline"}>Download CV</TextAccent>
            </Box>
            <Box>
              <Socials />
            </Box>
          </Container>

          <Container disablePaddingTop>
            <Title text={"Experience"} hasMarginBottom />
            {EXPERIENCE.map((item, idx) => (
              <WorkTemplate key={`work-template-${idx}`} item={item} />
            ))}
          </Container>
        </>
      )
    }

    return (
      <>
            {/* 8 col 4 row */}
          <HomeContainer>
            <Box
              // style={{ gridArea: "1 / 1 / 5 / 3", border: "2px solid #fff" }}
              style={{display: 'flex', flex: 3, padding: 32, border: "2px solid #fff", borderLeft: 'none'}}
            >
              {/* <Box style={{height: "100%"}}> */}
                <Image src={AboutIcon} height={'100%'} />
              {/* </Box> */}
            </Box>

            <div 
              // style={{gridArea: "1 / 3 / 4 / 7"}}
              style={{display: 'flex', flex: 4, flexDirection: 'column'}}
            >
              <Box style={{height: "100%", flex: 20}}>
                <Title text={"About"} />
                <TextDescription>
                  Hello, my name is Levon, and I am thrilled to introduce myself
                  as a highly skilled UX Designer with over 10 years of experience
                  in the industry. Throughout my career, I have developed a deep
                  commitment to creating and maintaining design process that
                  elevate user experience and deliver visual consistency across a
                  wide range of businesses. <br /><br /> My expertise in UX design has been
                  honed through my work with both digital agencies and large
                  international technology companies. This diverse range of
                  experiences has equipped me with the skills needed to tackle
                  complex design challenges and deliver innovative solutions that
                  meet the unique needs of each client. <br /><br />My approach to UX design
                  is rooted in a deep understanding of user behavior, coupled with
                  a passion for creating intuitive and engaging user experiences.
                  Whether I am working on a website, mobile app, or other digital
                  platform, I always strive to deliver a design that not only
                  looks great but also meets the needs of the end-user. <br /><br />In
                  addition to my extensive experience in UX design, I am also
                  highly skilled in project management, team leadership, and
                  stakeholder communication. I understand the importance of
                  working collaboratively with clients and stakeholders to ensure
                  that the final product meets their needs and exceeds their
                  expectations.
                </TextDescription>
              </Box>
            
              <Box style={{height: "100%", flex: 1, alignItems: 'center', display: 'flex'}}>
                <TextAccent decoration={"underline"}>Download CV</TextAccent>
              </Box>
            </div>
            <div 
              // style={{ gridArea: "1 / 7 / 5 / 8" }}
              style={{display: 'flex', flex: 2, marginRight: 40}}
            >
              <Box style={{ padding: 0, marginBottom: 0}}>
                <Socials />
              </Box>
            </div>
          </HomeContainer>

          <Container disablePaddingTop>
            <Title text={"Experience"} hasMarginBottom />
            {EXPERIENCE.map((item, idx) => (
              <WorkTemplate key={`work-template-${idx}`} item={item} />
            ))}
          </Container>
        </>
    )
  }

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
