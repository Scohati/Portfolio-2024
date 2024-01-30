import imgText from '../../assets/imgs/img-text.svg'
import linkRIght from '../../assets/imgs/link-arrow-right.svg'
import {
    Button,
    DivText,
    H3,
    H3Developer,
    H6,
    IntroSection,
    P
} from './styled.js'
import { useTheme } from '../../contexts/ThemeContext.jsx'
import Translator from '../../i18n/Translator.jsx'

const Intro = () => {

    const { theme } = useTheme() 

    return (
        <IntroSection>
            <DivText>
                <H3 theme={theme}>DIOGO</H3>
                <img src={imgText} alt="Developer" />
                <H3 theme={theme}>SCOHATI</H3>
            </DivText>
            <DivText>
                <H3Developer theme={theme}>
                    <Translator path="intro.h3Dev" />
                </H3Developer>
                <div>
                    <H6 theme={theme}>
                        <Translator path="intro.h6" />
                    </H6>
                </div>
            </DivText>
                <P theme={theme}>
                    <Translator path="intro.p" />
                </P>
            <Button>
                <Translator path="intro.btn" />
                <img src={linkRIght} alt="Link image" />
            </Button>
        </IntroSection>
    )
}

export default Intro