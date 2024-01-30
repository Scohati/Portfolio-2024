import { styled } from 'styled-components'
import colors from '../../theme/colors'

export const IntroSection = styled.section `
    width: 100%;
    height: calc(100dvh - 82px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 780px;
        height: 585px;
        background-color: rgba(250, 209, 7, 0.35);
        transform: rotate(145deg);
        filter: blur(300px);
        border-radius: 300px;
    }
`

export const DivText = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
`

export const H3 = styled.h3 `
    font-size: 130px;
    color: ${({ theme }) => theme === 'light' ? colors.text : colors.white};
`
export const H3Developer = styled.h3 `
    font-size: 130px;
    font-weight: 400;
    color: ${({ theme }) => theme === 'light' ? colors.text : colors.white};
`

export const H6 = styled.h6 `
    font-size: 24px;
    color: ${({ theme }) => theme === 'light' ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'};
    max-width: 230px;
`

export const Button = styled.button `
    height: 44px;
    background-color: #FAD007;
    padding: 10px 26px;
    border: none;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    gap: 8px;
`

export const P = styled.p `
    color: ${({ theme }) => theme === 'light' ? colors.text2 : colors.white};
    font-size: 24px;
    text-align: center;
    z-index: 2;
    max-width: 850px;
`