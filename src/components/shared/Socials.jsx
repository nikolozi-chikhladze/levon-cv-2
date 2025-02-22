import styled from "styled-components";
import { fadeIn } from "./Text";
import { Link } from "react-router-dom";

export const SocialsContainer = styled.div`
  @media (min-width: 481px) {
    padding: 32px;
  }
`;

export const SocialsText = styled.p`
  font-family: "Helvetica Neue", serif;
  font-weight: bold;
  color: #fff;

  position: relative;
  animation: ${fadeIn} 2s linear normal;

  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; /* Adjust the height of the border */
    background-color: #fff; /* Adjust the color of the border */
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%; /* Expands the border on hover */
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 481px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
  }
`;

const LINKS = {
  linkedIn: "https://www.linkedin.com/in/levon-kostandyan-ba30267b",
  instagram:
    "https://www.instagram.com/_form_live?igsh=dHYwY3NieWpmaHc4&utm_source=qr",
  behance: "https://www.behance.net/SvGravity",
  dribbble: "https://dribbble.com/SvGravity",
};

export const Socials = () => {
  return (
    <SocialsContainer>
      <Link
        style={{ textDecoration: "none" }}
        to={LINKS.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialsText>LinkedIn</SocialsText>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialsText>Instagram</SocialsText>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={LINKS.behance}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialsText>Behance</SocialsText>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={LINKS.dribbble}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialsText>Dribbble</SocialsText>
      </Link>
    </SocialsContainer>
  );
};
