import BurgerIcon from '/src/assets/menu-burger.svg?react'
import CloseIcon from '/src/assets/menu-close.svg?react'
import {memo, useContext} from "react";
import {CommonContext} from "../../state/Common.context.jsx";

import {HeaderContainer, HeaderTitle, HeaderMenuButton} from './Header.styles.jsx'
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