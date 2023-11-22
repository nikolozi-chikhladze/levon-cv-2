import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
  
`;

const HeaderTitle = styled.h1`
  font-family: "Helvetica Neue",serif;
  font-weight: normal;
  color: #fff;
  
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    padding: 37px 64px 27px 32px;
  }
`;

const HeaderMenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #fff;
  
  
    @media (max-width: 480px) {
      padding: 25px 32px;
    }
`;

const HeaderMenuContainer = styled.div``;

export default {
    HeaderContainer,
    HeaderTitle,
    HeaderMenuButton,
    HeaderMenuContainer
}