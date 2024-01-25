import { styled } from 'styled-components'
import colors from '../../theme/colors.js'

export const FlexSection = styled.section `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`

export const Image = styled.img `
    cursor: pointer;
    height: 44px;
`

export const Div = styled.div `
    width: 200px;
`

export const Button = styled.button `
    width: 127px;
    height: 44px;
    background-color: #FAD007;
    padding: 10px 26px;
    border: none;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`

export const NavLinks = styled.nav `
    width: 400px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme == 'light' ? colors.white75 : colors.white};
    padding: 6px;
    gap: 6px;
    border-radius: 2px
`

export const Link = styled.a `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    transition: .3s;

    &:first-child {
        background-color: #FAD007;
    }
    &:not(:first-child):hover {
        background-color: #fad10786;
        transition: .3s;
    }
`
