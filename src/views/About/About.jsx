import star from '../../assets/imgs/star.svg'
import bgAbout from '../../assets/imgs/bg-about.svg'
import {
    AboutSection,
    AboutSubSection,
    H3,
    H4,
    P
} from './styled.js'
import Typography from '../../components/Typography.jsx'
import { useTheme } from '../../contexts/ThemeContext.jsx'

const About = () => {

    const { theme } = useTheme()

    return (
        <AboutSection id='#about'>
            <AboutSubSection>
                <div>
                    <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>ABOUT THE <br/> DIOGO SCOHATI</Typography>
                    <img src={star} alt="" className='starClass'/>
                </div>
                <div>
                    <P theme={theme}>
                        I am a highly adaptable professional with 10 years of experience, capable of thriving
                        in challenging invironments, even under considerable pressure.
                        <br/>
                        <br/>
                        My expertise spans
                        across all fields of development, with a deep mastery of the fundamental principles
                        of programming. 
                    </P>
                </div>
            </AboutSubSection>
            <img src={bgAbout} alt="Co-work image"/>
            <AboutSubSection>
                {/* <H4>GET AQUANTED WITH <br/> MY KEY FACTS</H4> */}
                <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>GET AQUANTED WITH <br/> MY KEY FACTS</Typography>
                <section className='dataSection'>
                    <div>
                        <H3 theme={theme}>12<strong>+</strong></H3>
                        {/* <p>Project Completed</p> */}
                        <Typography type={'BBS'} color={theme === 'light' ? 'text' : 'gray'}>Project Completed</Typography>

                    </div>
                    <div>
                        <H3 theme={theme}>95<strong>%</strong></H3>
                        {/* <p>Clients Satisfaction</p> */}
                        <Typography type={'BBS'} color={theme === 'light' ? 'text' : 'gray'}>Clients Satisfaction</Typography>
                    </div>
                </section>
            </AboutSubSection>
        </AboutSection>
    )
}

export default About