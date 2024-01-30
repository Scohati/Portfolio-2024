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
import Translator from '../../i18n/Translator.jsx'

const Header = () => {

    const { theme } = useTheme()

    return (
        <FlexSection>
            <Div>
                <Image src={theme === 'light' ? logo : logoDark} alt="Diogo Scohati's Logo" />
            </Div>
            <NavLinks theme={theme}>
                <Link href="#home">
                    <Translator path="header.home" />
                </Link>
                <Link href="#about">
                    <Translator path="header.about" />
                </Link>
                <Link href="#works">
                    <Translator path="header.works" />
                </Link>
                <Link href="#contact">
                    <Translator path="header.contact" />
                </Link>
            </NavLinks>
            <Div>
                <Button>
                    <Translator path="header.contact" />
                </Button>
            </Div>
        </FlexSection>
    )
}

export default Header