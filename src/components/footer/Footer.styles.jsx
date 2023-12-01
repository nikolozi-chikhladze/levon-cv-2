import styled from "styled-components";
import { fadeIn } from "../shared/Text";

export const FooterContainer = styled.div`
  border-top: 10px solid #fff;

  @media (max-width: 480px) {
    padding: 24px 32px;
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
`;
