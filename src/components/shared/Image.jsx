import styled from "styled-components";
import { fadeIn } from "./Text";

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  animation: ${fadeIn} 2s linear normal;

  @media (max-width: 480px) {
    margin-bottom: ${(props) => props?.marginBottom || "32px"};
  }
`;
