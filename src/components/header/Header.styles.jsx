import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
  position: relative;
  
`;

export const HeaderTitleContainer = styled.h1`
  @media (max-width: 480px) {
    padding: 27px 52px 27px 32px;
  }
`;

export const HeaderMenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #fff;
  
    @media (max-width: 480px) {
      padding: 25px 32px;
    }
`;


