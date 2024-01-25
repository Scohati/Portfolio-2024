import { styled } from 'styled-components'
import ico1 from '../../assets/imgs/icon-01.svg'
import ico2 from '../../assets/imgs/icon-02.svg'
import ico3 from '../../assets/imgs/icon-03.svg'
import ico4 from '../../assets/imgs/icon-04.svg'
import colors from '../../theme/colors'


export const data = [
    {
        id: 0,
        ico: ico1,
        title: 'Branding',
        text: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
        id: 1,
        ico: ico2,
        title: 'Design',
        text: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
        id: 2,
        ico: ico3,
        title: 'Development',
        text: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
        id: 3,
        ico: ico4,
        title: 'Art Direction',
        text: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    }
]

export const H4 = styled.h4 `
    font-size: 32px;
`
export const OurServicesComp = styled.section `
    width: 100%;
    display: flex;
    padding: 0 100px;

    .knowServices {
        width: 40%;

    }
    .card {
        &-container {
            width: 60%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
        &-box {
            width: 100%;
            height: 370px;
            background-color: color: ${({theme}) => theme === 'light' ? colors.text : colors.gray};
            padding: 32px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-img {
            width: 64px;
            height: 64px;
        }
        &-title {
            color: ${({theme}) => theme === 'light' ? colors.text : colors.white};
        }
        &-text {
            color: ${({theme}) => theme === 'light' ? colors.text : colors.gray};
            margin-top: 20px;
        }
    }
`

export const DivBox = styled.div `
    width: 100%;
    height: 370px;
    background-color: ${({theme}) => theme === 'light' ? colors.white75 : colors.text2};
    padding: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`