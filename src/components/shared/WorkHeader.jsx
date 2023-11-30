import ArrowIcon from "/src/assets/arrow.svg?react";
import styled from "styled-components";

import { TextTitledBold } from "./Text";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const WorkHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const WorkHeader = ({ text }) => {
  const navigate = useNavigate();
  return (
    <WorkHeaderContainer>
      <ArrowIcon
        height={48}
        width={48}
        style={{ transform: "rotate(180deg)", marginRight: "16px" }}
        stroke="#fff"
        onClick={() => navigate(-1)}
      />
      <TextTitledBold>{text}</TextTitledBold>
    </WorkHeaderContainer>
  );
};

WorkHeader.propTypes = {
  text: PropTypes.string,
};
