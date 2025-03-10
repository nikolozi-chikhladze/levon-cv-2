import styled from "styled-components";
import { fadeIn } from "./Text";

//animation: ${fadeIn} 2s linear normal 1;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  animation-duration: 2s;

  @media (max-width: 480px) {
    margin-bottom: ${(props) => props?.marginBottom || "32px"};
  }
`;
