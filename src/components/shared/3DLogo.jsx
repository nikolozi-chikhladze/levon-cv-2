import styled from "styled-components";
import { fadeIn } from "../shared/Text";

import { useRef } from "react";

const IFrameComponent = styled.iframe`
  width: 100%;
  backgroundcolor: transparent;
  animation: ${fadeIn} 2s linear normal;
`;

export const Logo3D = () => {
  const reference = useRef(null);
  return (
    <IFrameComponent
      ref={reference}
      allowtransparency="true"
      src="https://app.endlesstools.io/embed/a38f085e-05d6-4560-b294-56b01bab0418"
      title="Endless Tools Editor"
      frameborder="0"
      allow="clipboard-write; encrypted-media; gyroscope; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  );
};
