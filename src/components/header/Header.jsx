import BurgerIcon from "/src/assets/menu-burger.svg?react";
import CloseIcon from "/src/assets/menu-close.svg?react";
import { useContext } from "react";
import { CommonContext } from "../../state/Common.context.jsx";

import {
  HeaderContainer,
  HeaderMenuButton,
  HeaderTitleContainer,
} from "./Header.styles.jsx";
import { TextRegular } from "../shared/Text.jsx";
import PropTypes from "prop-types";

export const Header = ({ text }) => {
  const { isHeaderOpen, toggleHeader } = useContext(CommonContext);

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <TextRegular>{text}</TextRegular>
      </HeaderTitleContainer>
      <HeaderMenuButton onClick={() => toggleHeader()}>
        {isHeaderOpen ? (
          <CloseIcon height={38} width={38} fill={"#fff"} />
        ) : (
          <BurgerIcon height={38} width={38} fill={"#fff"} />
        )}
      </HeaderMenuButton>
    </HeaderContainer>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
