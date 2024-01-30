import React from "react"
import { styled } from 'styled-components'

const Flag = ({ image, isSelected, ...props }) => {

    const FlagSection = styled.section `
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    `

    return (
        <FlagSection>
            <img alt="flag" src={image} className={isSelected ? 'flag-selected' : 'flag'} {...props} />
        </FlagSection>
    )
}

export default Flag