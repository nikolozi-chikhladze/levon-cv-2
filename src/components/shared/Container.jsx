import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  @media (max-width: 480px) {
    padding: 32px;
    padding-top: ${(props) => (props?.disablePaddingTop ? "0px" : "32px")};
  }
`;

export const HomeContainer = styled.div`
  position: relative;
  display: none;

  @media (min-width: 481px) {
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 0.375fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
    left: -40px; */
    display: flex;
    /* position: relative; */
    /* left: -40px; */
  }
`;
