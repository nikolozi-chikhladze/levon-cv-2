import styled from "styled-components";
import { fadeIn } from "../shared/Text";

export const FooterContainer = styled.div`
  /* border-top: 10px solid #fff; */
  position: relative;
  display: flex;
  align-self: flex-end;
  /* width: 100vw; */

  @media (max-width: 480px) {
    padding: 24px 32px;
    flex-direction: column;
  }

  @media (min-width: 481px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: none;
    align-self: flex-end;
  }
`;

export const FooterText = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: normal;
  color: #fff;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (min-width: 481px) {
    padding: 26px 32px;
  }
`;
