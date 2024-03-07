import { useContext } from "react";
import { Background } from "../components/shared/Background";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { CommonContext } from "../state/Common.context";
import { ScrollRestoration, useParams } from "react-router-dom";
import { MobileMenu } from "../components/mobileMenu/MobileMenu";
import { Container } from "../components/shared/Container";
import { WorkHeader } from "../components/shared/WorkHeader";
import { getAppDetailedData } from "../data/works";
import { Box } from "../components/shared/Box";
import {
  TextAccent,
  TextDescription,
  TextGroupDivider,
  TextGroupTitle,
} from "../components/shared/Text";
import { Image } from "../components/shared/Image";
import { WorkPagination } from "../components/shared/WorkPagination";
import { useWindowSize } from "../utils/useWindowSize";

export const WorkScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  let { id: paramId } = useParams();
  const data = getAppDetailedData(paramId);
  const { isMobile } = useWindowSize()

  if (isMobile) {
    return (
      <>
      <ScrollRestoration />
      <Background>
        <Header text={"Senior UX Designer"} />

        {isHeaderOpen ? (
          <MobileMenu />
        ) : (
          <Container>
            <WorkHeader text={data.title} />
            <Image src={`/src/assets/${data.banner}`} />
            {data.sections.map((section, sectionIdx) => (
              <>
                <Box>
                  <TextAccent>{section.title}</TextAccent>
                </Box>
                <Box>
                  {section?.data?.map((dataItem) => {
                    switch (dataItem.type) {
                      case "text":
                        return (
                          <TextDescription
                            marginBottom={sectionIdx === 0 ? "0px" : "16px"}
                          >
                            {dataItem.value}
                          </TextDescription>
                        );
                      case "image":
                        return (
                          <Image
                            src={`/src/assets/${dataItem.value}`}
                            marginBottom={"0px"}
                          />
                        );
                      case "group":
                        return (
                          <>
                            <TextGroupTitle>
                              {dataItem.value.title}
                            </TextGroupTitle>
                            <TextGroupDivider>----------</TextGroupDivider>
                            {dataItem.value.bullets.map((bullet) => (
                              <TextDescription key={bullet} marginBottom="32px">
                                {bullet}
                              </TextDescription>
                            ))}
                          </>
                        );
                      default:
                        break;
                    }
                  })}
                </Box>
              </>
            ))}
            <WorkPagination previous={data.previousPage} next={data.nextPage} />
          </Container>
        )}
        <Footer />
      </Background>
    </>
    )
  }

  return (
    <>
      <ScrollRestoration />
      <Background>
        <Header text={"Senior UX Designer"} />

          <Container>
            <WorkHeader text={data.title} />
            <div style={{padding: 32, height: 500}}>
              <Image src={`/src/assets/${data.banner}`} height={"100%"}/>
            </div>
            {data.sections.map((section, sectionIdx) => (
              <div style={{display: 'flex'}} key={sectionIdx}>
                <Box style={{display: 'flex', flex: 1}}>
                  <TextAccent>{section.title}</TextAccent>
                </Box>
                <Box style={{display: 'flex', flex: 3, flexDirection: 'column'}}>
                  {section?.data?.map((dataItem) => {
                    switch (dataItem.type) {
                      case "text":
                        return (
                          <TextDescription
                            marginBottom={sectionIdx === 0 ? "0px" : "16px"}
                          >
                            {dataItem.value}
                          </TextDescription>
                        );
                      case "image":
                        return (
                          <Image
                            src={`/src/assets/${dataItem.value}`}
                            marginBottom={"0px"}
                          />
                        );
                      case "group":
                        return (
                          <>
                            <TextGroupTitle>
                              {dataItem.value.title}
                            </TextGroupTitle>
                            <TextGroupDivider>----------</TextGroupDivider>
                            {dataItem.value.bullets.map((bullet) => (
                              <TextDescription key={bullet} marginBottom="32px">
                                {bullet}
                              </TextDescription>
                            ))}
                          </>
                        );
                      default:
                        break;
                    }
                  })}
                </Box>
              </div>
            ))}
            <WorkPagination previous={data.previousPage} next={data.nextPage} />
          </Container>
        <Footer />
      </Background>
    </>
  );
};
