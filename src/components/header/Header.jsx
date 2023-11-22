import HeaderStyles from "./Header.styles.jsx";
import BurgerIcon from '/src/assets/menu-burger.svg?react'

const {HeaderContainer, HeaderTitle, HeaderMenuContainer, HeaderMenuButton} = HeaderStyles;
export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Senior UX Designer</HeaderTitle>
            <HeaderMenuButton>
                <BurgerIcon height={38} width={38} fill={'#fff'} />
            </HeaderMenuButton>
        </HeaderContainer>
    )
}

export default Header;