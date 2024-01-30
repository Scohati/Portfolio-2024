import { styled } from 'styled-components'
import { ToggleTheme } from '../../components'
import I18n from '../../i18n/I18n'

export default function Controls() {

    const ControlsSection = styled.section `
        width: 56px;
        background-color: rgba(155, 155, 155, 0.5);
        position: fixed;
        bottom: 15px;
        right: 15px;
        border-radius: 30px;
        padding: 5px 0;
        display: grid;
        justify-content: center;
        gap: 5px;
    `

    return (
        <ControlsSection>
            <I18n />
            <ToggleTheme />
        </ControlsSection>
    )
}