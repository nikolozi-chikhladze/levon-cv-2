import BurgerIcon from "/public/menu-burger.svg?react";
import CloseIcon from "/public/menu-close.svg?react";
import { useContext } from "react";
import { CommonContext } from "../../state/Common.context.jsx";

import {
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuContainer,
  HeaderMenuItem,
  HeaderTitleContainer,
} from "./Header.styles.jsx";
import { TextRegular, TextTitled } from "../shared/Text.jsx";
import PropTypes from "prop-types";
import { AnimatedBorders } from "../shared/AnimatedBorders.jsx";
import { useWindowSize } from "../../utils/useWindowSize.jsx";
import { useLocation } from "react-router-dom";

export const Header = ({ text }) => {
  const { isHeaderOpen, toggleHeader } = useContext(CommonContext);
  const { isMobile } = useWindowSize();
  const { pathname } = useLocation();

  return (
    <HeaderContainer id="header" style={{ position: "relative" }}>
      <AnimatedBorders hasBorderBottom>
        <HeaderTitleContainer to={"/"}>
          <TextRegular>{text}</TextRegular>
        </HeaderTitleContainer>
        {isMobile ? (
          <HeaderMenuButton onClick={() => toggleHeader()}>
            <AnimatedBorders hasBorderLeft>
              {isHeaderOpen ? (
                <CloseIcon height={38} width={38} fill={"#fff"} />
              ) : (
                <BurgerIcon height={38} width={38} fill={"#fff"} />
              )}
            </AnimatedBorders>
          </HeaderMenuButton>
        ) : null}
        <HeaderMenuContainer>
          <HeaderMenuItem
            to={"/about"}
            className={pathname === "/about" && "isActive"}
          >
            <AnimatedBorders hasBorderLeft={true}>
              <TextTitled>About</TextTitled>
            </AnimatedBorders>
          </HeaderMenuItem>
          <HeaderMenuItem
            to={"/works"}
            className={pathname === "/works" && "isActive"}
          >
            <AnimatedBorders hasBorderLeft={true}>
              <TextTitled>Works</TextTitled>
            </AnimatedBorders>
          </HeaderMenuItem>
          <HeaderMenuItem
            to={"/contact"}
            className={pathname === "/contact" && "isActive"}
          >
            <AnimatedBorders hasBorderLeft={true}>
              <TextTitled>Contact</TextTitled>
            </AnimatedBorders>
          </HeaderMenuItem>
        </HeaderMenuContainer>
      </AnimatedBorders>
    </HeaderContainer>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
