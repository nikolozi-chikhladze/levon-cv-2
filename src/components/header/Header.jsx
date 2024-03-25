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

export const Header = ({ text }) => {
  const { isHeaderOpen, toggleHeader } = useContext(CommonContext);
  const { isMobile } = useWindowSize();

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
          <HeaderMenuItem to={"/about"}>
            <AnimatedBorders hasBorderLeft={true}>
              <TextTitled>About</TextTitled>
            </AnimatedBorders>
          </HeaderMenuItem>
          <HeaderMenuItem to={"/works"}>
            <AnimatedBorders hasBorderLeft={true}>
              <TextTitled>Works</TextTitled>
            </AnimatedBorders>
          </HeaderMenuItem>
          <HeaderMenuItem to={"/contact"}>
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
