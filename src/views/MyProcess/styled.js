import { styled } from 'styled-components'
import colors from '../../theme/colors'

export const data = [
    {
        id: '01',
        title: 'Research & Plan',
        text: 'Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.'
    },
    {
        id: '02',
        title: 'Mock Up',
        text: 'Creating a mock up is the step of the design process most people recognize — it’s the most visual part of the process In-depth sketching and brainstorming.'
    },
    {
        id: '03',
        title: 'Build',
        text: 'Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers)Revise the solution as technical issues.'
    }
]

export const H4 = styled.h4 `
    font-size: 32px;
    color: ${({theme}) => theme === 'light' ? colors.text : colors.white };
`
export const CardSection = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 350px;
    gap: 32px;

    .card {
        &-info {
            p {
                font-weight: 600;
                color: #39393B;
                margin-top: 20px;
                height: 80px
            }
        }
    }
`
export const CardContainer = styled.div `
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: ${({theme}) => theme === 'light' ? colors.accent50 : 'rgba(250, 208, 7, 0.03)' };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NumberComp = styled.span `
    font-size: 80px;
    color: ${colors.accent};
    font-weight: 600;
`
export const MyProcessSection = styled.section `
    width: 100%;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
`

export const P = styled.p `
    font-weight: 600;
    color: ${({theme}) => theme === 'light' ? colors.text2 : colors.gray };
    margin-top: 20px;
    height: 80px
`