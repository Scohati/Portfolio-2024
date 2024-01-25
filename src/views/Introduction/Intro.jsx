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
                <H3Developer theme={theme}>SR DEVELOPER</H3Developer>
                <div>
                    <H6 theme={theme}>Front end developer <br /> based in Brazil</H6>
                </div>
            </DivText>
            <P theme={theme}>I’m a senior front end developer with 10 years of experience with 10+ successful 
                <br />projects in my portfolio</P>
            <Button>
                Message me
                <img src={linkRIght} alt="Link image" />
            </Button>
        </IntroSection>
    )
}

export default Intro