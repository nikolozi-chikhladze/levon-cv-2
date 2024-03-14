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

  const [hoveredWorkItem, setHoveredWorkItem] = useState(WORKS[0])

  const onHover = (id) => {
    setHoveredWorkItem(WORKS.find(i => i.id === id))
  }

  const workListRef = useRef(null)
  const heightRef = useRef(null)

  useEffect(() => {
    if (!isMobile) {
      heightRef.current = workListRef.current?.clientHeight
      console.log('set', heightRef.current)
    }
  }, [isMobile])
  

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
          <Box style={{display: 'flex', flex: 1, borderTop: "2px solid #fff", borderBottom: 'none', borderLeft: "none", padding: 16, borderRight: 'none', minHeight: 746}}>
            {hoveredWorkItem ?
              <Image src={hoveredWorkItem?.cover} height="746px" /> : null
            }
          </Box>
          <div style={{display: 'flex', flexDirection: 'column', flex: 1, marginRight: 40, maxHeight: WORKS.length * 78}} ref={workListRef}>
            {WORKS.map((item, idx) => (
                <Box key={item.id} hasPadding={false} style={{maxHeight: 78, margin: 0, padding: 0, ...idx !== WORKS.length - 1 ? {borderBottom: 0} : {}}}>
                  <WorksItem text={item.title} id={item.id} onHover={onHover} isPreSelected={hoveredWorkItem?.id === item.id}/>
                </Box>
            ))}
          </div>
        </div>
      </Container>
    )
  }
  return (
    <Background>
      <Header text={"Lead UX Designer"} />
      <Outlet />
      {renderContent()}
      <Footer containerStyle={{borderTop: "2px solid #fff"}}/>
    </Background>
  );
};
