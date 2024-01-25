import { styled } from 'styled-components'
import colors from '../theme/colors'

const Typography = ({children, type, color}) => {


    const fonts = {
        H1: styled.h1 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 96px;
        `,
        H2: styled.h2 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 56px;
        `,
        H3: styled.h3 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 48px;
        `,
        H4: styled.h4 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 32px;
        `,
        H5: styled.h5 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 32px;
            font-weight: 600;
        `,
        H6: styled.h6 `
            color: ${color ? colors[color] : colors['text']};
            font-size: 24px;
            font-weight: 600;
        `,
        BLG: styled.p `
            color: ${color ? colors[color] : colors['text']};
            font-size: 18px;
            font-weight: 600;
        `,
        BBS: styled.p `
            color: ${color ? colors[color] : colors['text']};
            font-size: 16px;
            font-weight: 600;
        `,
        BSM: styled.p `
            color: ${color ? colors[color] : colors['text']};
            font-size: 14px;
            font-weight: 500;
        `,
    }


    const Component = ({children, type}) => {

        const Title = fonts[type]

        return (
            <Title>{children}</Title>
        )
    }

    return (
        <Component type={type}>{children}</Component>
    )
}

export default Typography