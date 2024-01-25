import { styled } from 'styled-components'
import colors from '../../theme/colors'


export const AboutSection = styled.section `
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 52px;

    img {
        width: 100%;
    }
`
export const AboutSubSection = styled.section `
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 100px;

    div {
        .starClass {
            width: 64px;
            margin-top: 46px;
        }
    }
    .dataSection {
        display: flex;
        align-items: center;
        gap: 32px;

        div {
            text-align: center;
        }
    }
`
export const H4 = styled.h4 `
    font-size: 32px;
`
export const H3 = styled.h4 `
    font-size: 48px;
    color: ${({theme}) => theme === 'light' ? colors.text : colors.white};

    strong {
        color: ${colors.accent};
    }
`

export const P = styled.p `
    font-size: 24px;
    max-width: 600px;
    color: ${({theme}) => theme === 'light' ? colors.text : colors.gray};
`