import { useContext } from "react";
import { Background } from "../../components/shared/Background.jsx";
import Header from "../../components/header/Header.jsx";
import { Footer } from "../../components/footer/Footer.jsx";
import { CommonContext } from "../../state/Common.context.jsx";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu.jsx";
import { Container } from "../../components/shared/Container.jsx";
import { Box } from "../../components/shared/Box.jsx";
import { WorksItem } from "../../components/worksItem/WorksItem.jsx";
import { Outlet } from "react-router-dom";
import { WORKS } from "../../data/works.js";

export const WorksScreen = () => {
  const { isHeaderOpen } = useContext(CommonContext);
  return (
    <Background>
      <Header text={"Senior UX Designer"} />
      <Outlet />
      {isHeaderOpen ? (
        <MobileMenu />
      ) : (
        <Container>
          {WORKS.map((item) => (
            <Box key={item.id} hasPadding={false}>
              <WorksItem text={item.title} id={item.id} />
            </Box>
          ))}
        </Container>
      )}
      <Footer />
    </Background>
  );
};
