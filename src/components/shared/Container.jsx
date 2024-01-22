import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 480px) {
    padding: 32px;
    padding-top: ${(props) => (props?.disablePaddingTop ? "0px" : "32px")};
  }
`;

export const HomeContainer = styled.div`
  display: none;

  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(8, 0.4fr);
    grid-template-rows: repeat(4, 0.375fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
    left: -40px;
  }
`;
