import BurgerIcon from  "/public/menu-burger.svg?react";
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

export const Header = ({ text }) => {
  const { isHeaderOpen, toggleHeader } = useContext(CommonContext);
  return (
    <HeaderContainer id="header">
      <HeaderTitleContainer to={"/"}>
        <TextRegular>{text}</TextRegular>
      </HeaderTitleContainer>
      <HeaderMenuButton onClick={() => toggleHeader()}>
        {isHeaderOpen ? (
          <CloseIcon height={38} width={38} fill={"#fff"} />
        ) : (
          <BurgerIcon height={38} width={38} fill={"#fff"} />
        )}
      </HeaderMenuButton>
      <HeaderMenuContainer>
        <HeaderMenuItem to={"/about"}>
          <TextTitled>About</TextTitled>
        </HeaderMenuItem>
        <HeaderMenuItem to={"/works"}>
          <TextTitled>Works</TextTitled>
        </HeaderMenuItem>
        <HeaderMenuItem to={"/contact"}>
          <TextTitled>Contact</TextTitled>
        </HeaderMenuItem>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
