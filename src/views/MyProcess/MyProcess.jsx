import {
    CardSection,
    H4,
    MyProcessSection,
    NumberComp,
    data,
    P,
    CardContainer
} from './styled'
import { useTheme } from '../../contexts/ThemeContext'
import Typography from '../../components/Typography'

const OurProcess = () => {

    const { theme } = useTheme()

    return (
        <MyProcessSection>
            <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>MY PROCESS</Typography>
            <CardSection>
                {
                    data.map(item => (
                        <CardContainer theme={theme} key={item.id}>
                            <NumberComp>{item.id}</NumberComp>
                            <div className='card-info'>
                                <H4 theme={theme}>{item.title}</H4>
                                <P theme={theme}>{item.text}</P>
                            </div>
                        </CardContainer>
                    ))
                }
            </CardSection>
        </MyProcessSection>
    )
}

export default OurProcess