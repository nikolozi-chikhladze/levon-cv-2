import styled from "styled-components";

export const Box = styled.div`
  flex: 1;
  padding: ${(props) =>
    typeof props.hasPadding === "boolean"
      ? props.hasPadding
        ? "16px 18px"
        : "none"
      : "16px 18px"};
  border: 2px solid #fff;
  border-bottom: none;

  @media (min-width: 481px) {
    padding: ${(props) =>
      typeof props.hasPadding === "boolean"
        ? props.hasPadding
          ? "16px 32px"
          : "none"
        : "16px 32px"};
    padding-top: ${(props) =>
      typeof props.paddingTop === "string"
        ? props.paddingTop + "!important"
        : null};
    padding-left: ${(props) =>
      typeof props.paddingLeft === "string"
        ? props.paddingLeft + "!important"
        : null};
    border-bottom: 2px solid #fff;
  }

  &:last-child {
    border-bottom: 2px solid #fff;
  }
`;
