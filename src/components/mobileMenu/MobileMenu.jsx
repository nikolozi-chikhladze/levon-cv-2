import {Container} from "../shared/Container.jsx";
import {Box} from "../shared/Box.jsx";
import {MobileMenuText} from "./MobileMenu.styles.jsx";
import {SocialsContainer, SocialsText} from "../shared/Socials.jsx";
import {useNavigate} from "react-router-dom";
import {CommonContext} from "../../state/Common.context.jsx";
import {useCallback, useContext} from "react";

export const MobileMenu = () => {
    const navigate = useNavigate();
    const {toggleHeader} = useContext(CommonContext)

    const navigateTo = useCallback((route) => () => {
        toggleHeader();
        navigate(route);
    }, [navigate]);

    return (
        <Container>
            <Box onClick={navigateTo("/")}>
                <MobileMenuText>Home</MobileMenuText>
            </Box>
            <Box onClick={navigateTo("/about")}>
                <MobileMenuText>About</MobileMenuText>
            </Box>
            <Box onClick={navigateTo("/works")}>
                <MobileMenuText>Works</MobileMenuText>
            </Box>
            <Box onClick={navigateTo("/contact")}>
                <MobileMenuText>Contact</MobileMenuText>
            </Box>
            <Box>
                <SocialsContainer>
                    <SocialsText>LinkedIn</SocialsText>
                    <SocialsText>Instagram</SocialsText>
                    <SocialsText>Behance</SocialsText>
                    <SocialsText>Dribble</SocialsText>
                </SocialsContainer>
            </Box>
        </Container>
    )
}
