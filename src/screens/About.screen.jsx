import { useContext } from "react";
import { Background } from "../components/shared/Background.jsx";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { CommonContext } from "../state/Common.context.jsx";
import { MobileMenu } from "../components/mobileMenu/MobileMenu.jsx";
import { Container } from "../components/shared/Container.jsx";
import { Title } from "../components/shared/Title.jsx";
import AboutIcon from "/src/assets/about.png?react";
import { Box } from "../components/shared/Box.jsx";
import { TextAccent, TextDescription } from "../components/shared/Text.jsx";
import { Socials } from "../components/shared/Socials.jsx";
import { WorkTemplate } from "../components/shared/WorkTemplate.jsx";
import { Image } from "../components/shared/Image.jsx";
import { EXPERIENCE } from "../data/experience.js";

export const AboutScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
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
                wide range of businesses. My expertise in UX design has been
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
                expectations.
              </TextDescription>
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
      )}
      <Footer />
    </Background>
  );
};
