import React, {useContext} from 'react'
import {Background} from "../../components/shared/Background.jsx";
import Header from "../../components/header/Header.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {CommonContext} from "../../state/Common.context.jsx";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.jsx";
import {Container} from "../../components/shared/Container.jsx";
import {Box} from "../../components/shared/Box.jsx";
import {WorksItem} from "../../components/worksItem/WorksItem.jsx";

const WORKS = [
    {
        id: 'planty-app',
        title: 'Planty App (iOS)',
    },
    {
        id: 'roommate',
        title: 'Roommate (iOS)',
    },
    {
        id: 'list-am',
        title: 'List.am (Web)',
    },
    {
        id: 'fin-fly',
        title: 'FinFly (Web)',
    },
    {
        id: 'keeps-me',
        title: 'KeepsMe (Web/Mobile)',
    },
    {
        id: 'medical-app',
        title: 'Medical App (iOS)',
    },
    {
        id: 'hca-healthcare',
        title: 'HCA Healthcare (Web) / NDA',
    },
    {
        id: 'spaarkd',
        title: 'SPAARKD (iOS) / NDA',
    },
    {
        id: 'inecobank',
        title: 'Inecobank (iOS) / NDA',
    },
]
export const WorksScreen = () => {
    const {isHeaderOpen} = useContext(CommonContext);
    return (
        <Background>
            <Header/>
            {isHeaderOpen ? <MobileMenu /> : (
                <Container>
                    {WORKS.map(item => (
                        <Box key={item.id} hasPadding={false}>
                            <WorksItem text={item.title} />
                        </Box>
                    ))}
                </Container>
            )}
            <Footer/>
        </Background>
    )
}
