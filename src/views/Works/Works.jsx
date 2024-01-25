import {
    Button,
    WorkSection
} from './styled'
import Typography from '../../components/Typography.jsx'
import { useTheme } from '../../contexts/ThemeContext.jsx'

const Works = () => {

    const { theme } = useTheme()

    return (
        <WorkSection>
            <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>SELECTED WORK</Typography>
            <Typography type={'BLG'} color={theme === 'light' ? 'text2' : 'gray'}>Our exceptional development services</Typography>

            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            <Button>View More</Button>
        </WorkSection>
    )
}

export default Works