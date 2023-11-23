import React, {useContext} from 'react'
import {Background} from "../../components/shared/Background.jsx";
import Header from "../../components/header/Header.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {CommonContext} from "../../state/Common.context.jsx";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.jsx";
import {Container} from "../../components/shared/Container.jsx";
import {Title} from "../../components/shared/Title.jsx";
import AboutIcon from "/src/assets/about.png?react";
import {Box} from "../../components/shared/Box.jsx";
import {TextAccent, TextDescription} from "../../components/shared/Text.jsx";
import {Socials} from "../../components/shared/Socials.jsx";
import {List, ListItem} from "../../components/shared/List.jsx";
import {WorkTemplate} from "../../components/shared/WorkTemplate.jsx";
import {Image} from "../../components/shared/Image.jsx";

const EXPERIENCE = [
    {
        title: 'ISAA',
        position: 'Senior UX Designer',
        date: 'Dec 2021 – May 2023',
        descriptions: [
            'Created the Henaket Design System that include a comprehensive set of design standards, guidelines, and principles that will ensure consistency and coherence across all government services. The system will be designed to facilitate collaboration, encourage creativity, and promote innovation in the development of government services for the public.',

        ],
        bullets: [
            'Developing user interface designs that are compliant with regulatory requirements, such as FDA and ISO guidelines.',
            'Creating wireframes and prototypes to test and validate design concepts.',
            'Conducting user testing and usability studies to gather feedback and optimize the design.',
            'Ensuring that the design is accessible to users with disabilities and complies with web accessibility guidelines.',
            'Continuously iterating and improving the design based on user feedback and data-driven insights.'
        ]
    },
    {
        title: 'EPAM',
        position: 'Senior User Experience Designer',
        date: 'May 2022',
        descriptions: [
            'Analyze business and client needs as well as prospective design options with care. Communicate and present my design desicions to PMs, Dev Team, Lead Designers and Stakeholders Create and present design approaches and solutions that engage a broad audience with the user story and bring them together around a shared goal. Collaborating directly with technologists to ascertain platform capabilities, come up with innovative technology solutions, and offer sound development advice. ',
            'Conducting user research to understand the needs and workflows of healthcare professionals and patients. ',
            'Creating user personas and scenarios to help guide the design process and ensure that our products meet the needs of our target audience. ',
            'Collaborating with cross-functional teams, including product managers, engineers, and regulatory experts, to ensure that the design meets the needs of the business and our customers. ',
            'Developing user interface designs that are compliant with regulatory requirements, such as FDA and ISO guidelines. ',
            'Creating wireframes and prototypes to test and validate design concepts. Conducting user testing and usability studies to gather feedback and optimize the design. ',
            'Ensuring that the design is accessible to users with disabilities and complies with web accessibility guidelines. ',
            'Continuously iterating and improving the design based on user feedback and data-driven insights.'
        ],
        bullets: []
    },
    {
        title: 'Arct.X',
        position: 'Lead Product Designer',
        date: 'Aug 2020 – Dec 2021',
        descriptions: [
            'I am skilled in digital graphical design tools, specifically Adobe Photoshop and Illustrator. In my previous work, I have developed design concepts for clients and mentored and guided designers in my team. Working with development teams, I have ensured the technical feasibility and correct design implementation. As a designer, I have been responsible for creating client websites, starting from the conceptualization stage to its final implementation. I have participated in brainstorming sessions to come up with creative solutions. Additionally, I have experience creating iOS apps and possess a strong understanding of UX/UI. Although I have basic knowledge of CSS/HTML, my primary focus is on design.'
        ],
        bullets: [
            'Led an active phase of work on a company design system',
            'Created and maintained company design system and interface guidelines',
            'Active role in the planning and control of the development team',
            'Heavily involved in the process of integrating the design system into company products (strategic planning, brainstorming/creativity, communication with external teams)'
        ]
    },
    {
        title: 'Smartclick',
        position: 'Design Team Lead',
        date: 'Sep 2019 – Aug 2020',
        descriptions: [
            'In gambling sphere, my focus is to create seamless and enjoyable experiences for users. I understand the importance of simplicity and clarity in design, as it can have a significant impact on the user\'s experience. My job is to develop designs that not only look aesthetically pleasing but are also easy to navigate. In the gambling industry, user trust is a critical factor. Therefore, I always keep in mind the need to create designs that are transparent and easy to understand, especially when it comes to the rules and regulations of gambling products. My goal is to provide users with a positive experience that is trustworthy and enjoyable.'
        ],
        bullets: [
            'Developing designs that are easy to navigate, aesthetically pleasing, and transparent.',
            'Keeping in mind the importance of user trust and creating designs that are trustworthy and easy to understand, especially when it comes to the rules and regulations of gambling products.',
            'Collaborating closely with development teams to ensure the technical feasibility and correct design implementation of our products.',
            'Conducting user testing and A/B testing to identify areas for improvement and ensure that the design meets the needs of the user.',
            'Striving to create intuitive designs that provide users with a seamless and trustworthy experience.',
            'Continuously testing and iterating to ensure that the designs I create meet the needs of our users and provide a positive experience.'
        ]
    },
    {
        title: 'Gamevision',
        position: 'Senior Product Designer',
        date: 'Nov 2018 – Sep 2019',
        descriptions: [
            'I was tasked with leading an active phase of work on the company\'s design system. This involved creating and maintaining the company\'s design system and interface guidelines. I also played an active role in the planning and control of the development team. Additionally, I was heavily involved in the process of integrating the design system into the company\'s products. This included strategic planning, brainstorming/creativity sessions, and communication with external teams. My contribution helped to ensure the seamless integration of the design system and enhanced the user experience across the company\'s products.'
        ],
        bullets: [
            'Led an active phase of work on a company design system',
            'Created and maintained company design system and interface guidelines',
            'Active role in the planning and control of the development team',
            'Heavily involved in the process of integrating the design system into company products (strategic planning, brainstorming/creativity, communication with external teams)'
        ]
    },
]

export const AboutScreen = () => {
    const {isHeaderOpen} = useContext(CommonContext)
    return (
        <Background>
            <Header />
                {isHeaderOpen ? <MobileMenu /> : (
                    <>
                        <Container >
                            <Title text={'Levon Kostandyan'} hasMarginBottom/>
                            <Image src={AboutIcon} />
                            <Box>
                                <Title text={'About'} />
                            </Box>
                            <Box>
                                <TextDescription>
                                    Hello, my name is Levon, and I am thrilled to introduce myself as a highly skilled UX Designer with over 10 years of experience in the industry. Throughout my career, I have developed a deep commitment to creating and maintaining design process that elevate user experience and deliver visual consistency across a wide range of businesses. My expertise in UX design has been honed through my work with both digital agencies and large international technology companies. This diverse range of experiences has equipped me with the skills needed to tackle complex design challenges and deliver innovative solutions that meet the unique needs of each client. My approach to UX design is rooted in a deep understanding of user behavior, coupled with a passion for creating intuitive and engaging user experiences. Whether I am working on a website, mobile app, or other digital platform, I always strive to deliver a design that not only looks great but also meets the needs of the end-user. In addition to my extensive experience in UX design, I am also highly skilled in project management, team leadership, and stakeholder communication. I understand the importance of working collaboratively with clients and stakeholders to ensure that the final product meets their needs and exceeds their expectations.
                                </TextDescription>
                            </Box>
                            <Box>
                                <TextAccent decoration={'underline'}>
                                    Download CV
                                </TextAccent>
                            </Box>
                            <Box>
                                <Socials />
                            </Box>
                        </Container>

                        <Container disablePaddingTop>
                            <Title text={'Experience'} hasMarginBottom />
                            {EXPERIENCE.map(item => <WorkTemplate item={item} />)}

                        </Container>
                    </>

                )}
            <Footer />
        </Background>

    )
}
