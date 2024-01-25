import {
    H4,
    OurServicesComp,
    data,
    DivBox
} from './styled'
import Typography from '../../components/Typography.jsx'
import { useTheme } from '../../contexts/ThemeContext.jsx'
import colors from '../../theme/colors.js'

const OurServices = () => {

    const { theme } = useTheme()

    return (
        <OurServicesComp>
            <div className='knowServices'>
                <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>KNOW MY<br/>SERVICES</Typography>
                <Typography type={'BLG'} color={theme === 'light' ? 'text2' : 'gray'}>Our exceptional development services</Typography>
            </div>
            <section className='card-container'>
                {
                    data.map(item => (
                        <DivBox key={item.id} theme={theme}>
                            <img src={`${item.ico}`} alt="Service Ico" className='card-img'/>
                            <div>
                                <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>{item.title}</Typography>
                                <Typography type={'BBS'} color={theme === 'light' ? 'text2' : 'gray'}>{item.text}</Typography>
                            </div>
                        </DivBox>
                    ))
                }
            </section>
        </OurServicesComp>
    )
}

export default OurServices