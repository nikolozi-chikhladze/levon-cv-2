import {Container} from "../shared/Container.jsx";
import {Box} from "../shared/Box.jsx";
import {SocialsContainer, SocialsText} from "../shared/Socials.jsx";
import {useNavigate} from "react-router-dom";
import {CommonContext} from "../../state/Common.context.jsx";
import {useCallback, useContext} from "react";
import {TextAccent} from "../shared/Text.jsx";

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
                <TextAccent>Home</TextAccent>
            </Box>
            <Box onClick={navigateTo("/about")}>
                <TextAccent>About</TextAccent>
            </Box>
            <Box onClick={navigateTo("/works")}>
                <TextAccent>Works</TextAccent>
            </Box>
            <Box onClick={navigateTo("/contact")}>
                <TextAccent>Contact</TextAccent>
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
