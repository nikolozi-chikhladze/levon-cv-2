import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 2px solid #fff; */
  position: relative;
  /* border-top: 10px solid #fff; */
  width: 100vw;

  @media (max-width: 480px) {
    height: fit-content;
  }
`;

export const HeaderTitleContainer = styled(NavLink)`
  text-decoration: none;

  @media (max-width: 480px) {
    padding: 27px 52px 27px 32px;
  }

  @media (min-width: 481px) {
    padding: 27px 0 27px 32px;
  }
`;

export const HeaderMenuButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border-left: 2px solid #fff; */

  @media (max-width: 480px) {
    display: flex;
    padding: 25px 32px;
  }
`;

export const HeaderMenuContainer = styled.div`
  display: none;
  flex-direction: row;

  @media (min-width: 481px) {
    display: flex;
    height: 100%;
  }
`;

export const HeaderMenuItem = styled(NavLink)`
  padding: 27px 160px 27px 32px;
  /* border-left: 2px solid #fff; */
  display: flex;
  flex: 1;
  text-decoration: none;
  position: relative;

  @media (min-width: 481px) {
    height: 100%;
    min-height: 80px;
  }

`;
