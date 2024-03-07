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

export const WorksScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  const {isMobile} = useWindowSize()

  const [hoveredWorkItem, setHoveredWorkItem] = useState('')

  const onHover = (item) => {
    setHoveredWorkItem(item)
  }

  const workListRef = useRef(null)
  const heightRef = useRef(null)

  useEffect(() => {
    heightRef.current = workListRef.current.clientHeight
    console.log('set', heightRef.current)
  }, [])
  

  const renderContent = () => {
    if (isMobile) {
      return (
        isHeaderOpen ? (
          <MobileMenu />
        ) : (
          <Container>
            {WORKS.map((item) => (
              <Box key={item.id} hasPadding={false}>
                <WorksItem text={item.title} id={item.id} />
              </Box>
            ))}
          </Container>
        )
      )
    }

    return (
      <Container>
        <Title text={"Levon Konstandyan"} hasMarginBottom />
        <div style={{display: 'flex'}}>
          <Box style={{display: 'flex', flex: 1, border: "2px solid #fff", borderLeft: "none", padding: 16, minHeight: heightRef.current}}>
            {hoveredWorkItem ?
              <Image src={`/src/assets/${hoveredWorkItem}-banner.png`} height={heightRef.current} /> : null
            }
          </Box>
          <div style={{display: 'flex', flexDirection: 'column', flex: 1, marginRight: 40}} ref={workListRef}>
            {WORKS.map((item) => (
                <Box key={item.id} hasPadding={false} style={{margin: 0, padding: 0}}>
                  <WorksItem text={item.title} id={item.id} onHover={onHover}/>
                </Box>
            ))}
          </div>
        </div>
      </Container>
    )
  }
  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      <Outlet />
      {renderContent()}
      <Footer />
    </Background>
  );
};
