import ArrowIcon from "/public/arrow.svg?react";
import styled from "styled-components";

import { TextDescription, TextTitledBold } from "./Text";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useWindowSize } from "../../utils/useWindowSize";
import { AnimatedBorders } from "./AnimatedBorders";

export const WorkHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }

  @media (min-width: 481px) {
    /* padding: 32px 32px; */
    height: 113px;
    justify-content: space-between;
  }
`;

export const WorkHeader = ({ text, caseStudyUrl }) => {
  const navigate = useNavigate();
  const { isMobile } = useWindowSize();

  if (isMobile) {
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
  }

  return (
    <WorkHeaderContainer>
      <AnimatedBorders hasBorderRight hasBorderBottom>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              padding: 32,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <AnimatedBorders hasBorderRight>
              <ArrowIcon
                height={48}
                width={48}
                style={{ transform: "rotate(180deg)" }}
                stroke="#fff"
                onClick={() => navigate(-1)}
              />
            </AnimatedBorders>
          </div>
          <TextTitledBold style={{ marginLeft: 32 }}>{text}</TextTitledBold>
        </div>

        {caseStudyUrl && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "0 32px",
              position: "relative",
            }}
          >
            <AnimatedBorders hasBorderLeft>
              <a target="_blank" href={caseStudyUrl} rel="noreferrer">
                <TextDescription
                  style={{
                    textDecoration: "underline",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#C1C1C1",
                  }}
                >
                  See Full Case Study
                </TextDescription>
              </a>
            </AnimatedBorders>
          </div>
        )}
      </AnimatedBorders>
    </WorkHeaderContainer>
  );
};

WorkHeader.propTypes = {
  text: PropTypes.string,
  caseStudyUrl: PropTypes.string,
};
