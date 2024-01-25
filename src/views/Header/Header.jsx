import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import logoDark from '../../assets/imgs/logo-dark.svg'
import {
    Button,
    Div,
    FlexSection,
    Image,
    Link,
    NavLinks
} from './styled.js'
import { useTheme } from '../../contexts/ThemeContext.jsx'

const Header = () => {

    const { theme } = useTheme()

    return (
        <FlexSection>
            <Div>
                <Image src={theme === 'light' ? logo : logoDark} alt="Diogo Scohati's Logo" />
            </Div>
            <NavLinks theme={theme}>
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#works">Works</Link>
                <Link href="#contact">Contact</Link>
            </NavLinks>
            <Div>
                <Button>Contact</Button>
            </Div>
        </FlexSection>
    )
}

export default Header