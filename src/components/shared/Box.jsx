import styled from "styled-components";

export const Box = styled.div`
  padding: ${props => 
          typeof props.hasPadding === 'boolean' ? 
            props.hasPadding ? 
                    '16px 18px' 
                    : 'none' 
          : '16px 18px'
};
  border: 2px solid #fff;
  border-bottom: none;
  
  &:last-child {
    border-bottom: 2px solid #fff;
  }
`