import React, {useState} from 'react'
import ArrowIcon from '/src/assets/arrow.svg?react'
import {WorksItemText, WorksItemTextContainer} from "./WorksItem.styles.jsx";

export const WorksItem = ({text}) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <WorksItemTextContainer
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            isFocused={isFocused}
        >
            <WorksItemText color={isFocused ? '#1a1a1a' : '#fff'}>{text}</WorksItemText>
            {isFocused && <ArrowIcon height={32} width={32}/>}
        </WorksItemTextContainer>
    )
}
