import { styled } from 'styled-components'
import light from '../assets/imgs/light.svg'
import dark from '../assets/imgs/dark.svg'
import { useTheme } from '../contexts/ThemeContext'

const ToggleTheme = () => {

    const { theme, toggleTheme } = useTheme()

    const ToggleSection = styled.section `
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        bottom: 25px;
        right: 25px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px;
    `
    const Image = styled.img `
        width: 100%;
        height: 100%;
    `

    return (
        <ToggleSection onClick={toggleTheme}>
            <Image src={theme === 'light' ? light : dark} alt="Toggle theme" />
        </ToggleSection>
    )
}

export default ToggleTheme