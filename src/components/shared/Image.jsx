import styled from "styled-components";

export const Image = styled.img`
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: ${(props) => props?.marginBottom || "32px"};
  }
`;
