import styled from "styled-components";
import { fadeIn } from "../shared/Text";

const IFrameComponent = styled.iframe`
    width: 100%;
    backgroundColor: transparent;
    animation: ${fadeIn} 2s linear normal;
`

export const Logo3D = () => {
    return <IFrameComponent
        allowtransparency="true" 
        src="https://app.endlesstools.io/embed/e0dd1630-b77c-46d7-8e29-fa16b7f70f4e"
        title="Endless Tools Editor" 
        frameborder="0" 
        allow="clipboard-write; encrypted-media; gyroscope; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
    />
}
