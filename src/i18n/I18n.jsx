import React from "react"
import { useTranslation } from "react-i18next"
import BrazilFlag from '../assets/imgs/brazil-flag.png'
import EuaFlag from '../assets/imgs/eua-flag.png'
import Flag from "./Flag"
import { styled } from 'styled-components'

const I18n = () => {
    const { i18n } = useTranslation()

    function handleChangeLanguage(language) {
        i18n.changeLanguage(language)
    }

    const selectedLanguage = i18n.language

    const I18nSection = styled.section `
        display: grid;
        gap: 5px;
    `

    return (
        <I18nSection className="flag-container">
            <Flag
                image={BrazilFlag}
                isSelected={selectedLanguage === 'pt-BR'}
                onClick={() => handleChangeLanguage('pt-BR')}
            />
            <Flag
                image={EuaFlag}
                isSelected={selectedLanguage === 'en-US'}
                onClick={() => handleChangeLanguage('en-US')}
            />
        </I18nSection>
    )
}


export default I18n