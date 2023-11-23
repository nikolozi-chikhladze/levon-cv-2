import React, {useContext} from 'react'
import {Background} from "../../components/shared/Background.jsx";
import Header from "../../components/header/Header.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {CommonContext} from "../../state/Common.context.jsx";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.jsx";
import {Box} from "../../components/shared/Box.jsx";
import {TextDescription, TextTitled} from "../../components/shared/Text.jsx";
import {Container} from "../../components/shared/Container.jsx";
import {Socials, SocialsContainer, SocialsText} from "../../components/shared/Socials.jsx";
import {Title} from "../../components/shared/Title.jsx";

export const ContactScreen = () => {
    const {isHeaderOpen} = useContext(CommonContext)
    return (
        <Background>
            <Header />
            {isHeaderOpen ? <MobileMenu /> : (
                <Container>
                    <Title text={'Contact'} hasMarginBottom/>
                    <Box>
                        <TextDescription>
                            I am always excited to meet new people, whether for work or personal reasons. If you have any questions, comments, or would want to discuss future opportunities, please contact me through the following channels:
                        </TextDescription>
                    </Box>
                    <Box>
                        <TextTitled>
                            Mail:
                        </TextTitled>
                        <TextDescription>
                            levon.kostandyan@gmail.com
                        </TextDescription>
                    </Box>
                    <Box>
                        <Socials />
                    </Box>
                </Container>
            )}
            <Footer />
        </Background>
    )
}
