import Header from "../components/header/Header.jsx";
import {
    HomeTitle,
    HomeTextPosition,
    HomeTextSummary,
    HomeTitleContainer
} from "./Home.styles.jsx";
import {Footer} from "../components/footer/Footer.jsx";
import {Background} from "../components/shared/Background.jsx";
import {useContext} from "react";
import {CommonContext} from "../state/Common.context.jsx";
import {Box} from "../components/shared/Box.jsx";
import {Container} from "../components/shared/Container.jsx";
import {MobileMenu} from "../components/mobileMenu/MobileMenu.jsx";
import {SocialsContainer, SocialsText} from "../components/shared/Socials.jsx";

const HomeScreen = () => {
    const {isHeaderOpen} = useContext(CommonContext)
    return (
        <Background>
            <Header />
            {!isHeaderOpen ?
                <Container>
                    <HomeTitleContainer>
                        <HomeTitle>Levon Kostandyan</HomeTitle>
                    </HomeTitleContainer>
                    <Box>
                        <HomeTitle>Senior UX Designer</HomeTitle>
                    </Box>
                    <Box>
                        <HomeTextSummary>Experienced UX Designer with over ten years of expertise, based in Yerevan, Armenia. Specializing on complicated systems and huge data.</HomeTextSummary>
                    </Box>
                    <Box>
                        <HomeTextPosition>Currently Senior UX Designer at ISAA.</HomeTextPosition>
                    </Box>
                    <Box>
                        <SocialsContainer>
                            <SocialsText>LinkedIn</SocialsText>
                            <SocialsText>Instagram</SocialsText>
                            <SocialsText>Behance</SocialsText>
                            <SocialsText>Dribble</SocialsText>
                        </SocialsContainer>
                    </Box>
                </Container> :
                <MobileMenu />
            }
            <Footer />
        </Background>
    )
}
export default HomeScreen
