import styled from "styled-components";

export const WorksItemTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.isFocused ? '#fff' : 'none'};
  
  @media (max-width: 480px) {
    padding: 16px 20px;
  }
`;

export const WorksItemText = styled.p`
  font-family: "Helvetica Neue", serif;
  color: ${props => props.color || '#fff'};
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;