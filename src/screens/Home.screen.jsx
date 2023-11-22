import Header from "../components/header/Header.jsx";
import {
    HomeTextSocial,
    HomeTitle,
    HomeTextPosition,
    HomeTextSummary,
    HomeContainer,
    HomeSocialsContainer,
    HomeBox,
    HomeTitleContainer
} from "./Home.styles.jsx";
import {Footer} from "../components/footer/Footer.jsx";
import {Background} from "../main.jsx";

const HomeScreen = () => {
    return (
        <Background>
            <Header />
            <HomeContainer>
                <HomeTitleContainer>
                    <HomeTitle>Levon Kostandyan</HomeTitle>
                </HomeTitleContainer>
                <HomeBox>
                    <HomeTitle>Senior UX Designer</HomeTitle>
                </HomeBox>
                <HomeBox>
                    <HomeTextSummary>Experienced UX Designer with over ten years of expertise, based in Yerevan, Armenia. Specializing on complicated systems and huge data.</HomeTextSummary>
                </HomeBox>
                <HomeBox>
                    <HomeTextPosition>Currently Senior UX Designer at ISAA.</HomeTextPosition>
                </HomeBox>
                <HomeBox>
                    <HomeSocialsContainer>
                        <HomeTextSocial>LinkedIn</HomeTextSocial>
                        <HomeTextSocial>Instagram</HomeTextSocial>
                        <HomeTextSocial>Behance</HomeTextSocial>
                        <HomeTextSocial>Dribble</HomeTextSocial>
                    </HomeSocialsContainer>
                </HomeBox>
            </HomeContainer>
            <Footer />
        </Background>
    )
}
export default HomeScreen
