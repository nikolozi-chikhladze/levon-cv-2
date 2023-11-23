import styled from "styled-components";

export const List = styled.ul`
  @media (max-width: 480px) {
    padding: 0 16px;
  }
  
`

export const ListItem = styled.li`
  ::before {
    content: "\\2022";
    color: #c1c1c1;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`