import { useState } from "react";
import ArrowIcon from "/public/arrow.svg?react";
import { WorksItemText, WorksItemTextContainer } from "./WorksItem.styles.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const WorksItem = ({ text, id, onHover, isPreSelected }) => {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  return (
    <WorksItemTextContainer
      onMouseEnter={() => {
        onHover && onHover(id)
        setIsFocused(true)
      }}
      onMouseLeave={() => {
        onHover && onHover(null)
        setIsFocused(false)
      }}
      isFocused={isPreSelected ? isPreSelected : isFocused}
      onClick={() => navigate(`/works/${id}`)}
    >
      <WorksItemText color={isPreSelected || isFocused ? "#1a1a1a" : "#fff"}>
        {text}
      </WorksItemText>
      {(isPreSelected || isFocused) && <ArrowIcon style={{position: 'absolute', right: 72}} height={32} width={32} stroke="#1a1a1a" />}
    </WorksItemTextContainer>
  );
};

WorksItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  onHover: PropTypes.func,
  isPreSelected: PropTypes.bool
};
