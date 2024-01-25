import { Typography } from '../../components'
import { styled } from 'styled-components'
import { useTheme } from '../../contexts/ThemeContext'

const ChoosePlan = () => {


    const { theme } = useTheme()

    const ChooseSection = styled.section `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    const TitleDiv = styled.div `
        max-width: 600px;
        text-align: center;
        display: grid;
        gap: 12px;
    `

    return (
        <ChooseSection>
            <TitleDiv>
                <Typography type={'H4'} color={theme === 'light' ? 'text' : 'white'}>CHOOSE YOUR PLAN</Typography>
                <Typography type={'BLG'} color={theme === 'light' ? 'text2' : 'gray'}>Consign offers a number of pricing plans to help you find one that fits your business needs best</Typography>
            </TitleDiv>
        </ChooseSection>
    )
}

export default ChoosePlan