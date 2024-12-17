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
        src="https://app.endlesstools.io/embed/a38f085e-05d6-4560-b294-56b01bab0418"
        title="Endless Tools Editor" 
        frameborder="0" 
        allow="clipboard-write; encrypted-media; gyroscope; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
    />
}
