import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 480px) {
    padding: 32px;
    padding-top: ${props => props?.disablePaddingTop ? '0px' : '32px'};
  }
`;