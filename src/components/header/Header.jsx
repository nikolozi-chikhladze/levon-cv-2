import BurgerIcon from '/src/assets/menu-burger.svg?react'
import CloseIcon from '/src/assets/menu-close.svg?react'
import {memo, useContext} from "react";
import {CommonContext} from "../../state/Common.context.jsx";

import {HeaderContainer,  HeaderMenuButton, HeaderTitleContainer} from './Header.styles.jsx'
import {TextAccent} from "../shared/Text.jsx";
export const Header = () => {
    const {isHeaderOpen, toggleHeader} = useContext(CommonContext)

    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <TextAccent>Senior UX Designer</TextAccent>
            </HeaderTitleContainer>
            <HeaderMenuButton onClick={() => toggleHeader()}>
                {isHeaderOpen ?
                    <CloseIcon height={38} width={38} fill={'#fff'} /> :
                    <BurgerIcon height={38} width={38} fill={'#fff'} />
                }
            </HeaderMenuButton>
        </HeaderContainer>
    )
}

export default Header;