import logo from '../../assets/imgs/logo.svg'
import logoDark from '../../assets/imgs/logo-dark.svg'
import {
    CompaniesSection,
} from './styled'
import Typography from '../../components/Typography.jsx'
import { useTheme } from '../../contexts/ThemeContext.jsx'

const Companies = () => {

    const { theme } = useTheme()

    return (
        <CompaniesSection>
            <Typography type={'BLG'} color={theme === 'light' ? 'text' : 'white'}>Proudly serving some of the top global companies</Typography>
            <div className='carousel'>
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
                <img src={theme === 'light' ? logo : logoDark} alt="logo" />
            </div>
        </CompaniesSection>
    )
}

export default Companies