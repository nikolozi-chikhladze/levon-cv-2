import HeaderStyles from "./Header.styles.jsx";
import BurgerIcon from '/src/assets/menu-burger.svg?react'
import CloseIcon from '/src/assets/menu-close.svg?react'
import {memo, useContext, useState} from "react";
import {CommonContext} from "../../state/Common.context.jsx";

const {HeaderContainer, HeaderTitle, HeaderMenuButton} = HeaderStyles;
export const Header = memo( () => {
    const {isHeaderOpen, toggleHeader} = useContext(CommonContext)

    return (
        <HeaderContainer>
            <HeaderTitle>Senior UX Designer</HeaderTitle>
            <HeaderMenuButton onClick={() => toggleHeader()}>
                {isHeaderOpen ?
                    <CloseIcon height={38} width={38} fill={'#fff'} /> :
                    <BurgerIcon height={38} width={38} fill={'#fff'} />
                }
            </HeaderMenuButton>
        </HeaderContainer>
    )
})

export default Header;