import { styled } from 'styled-components'
import {
  About,
  ChoosePlan,
  Companies,
  Header,
  Introduction,
  MyProcess,
  MyServices,
  Works
} from './views'
import { ToggleTheme } from './components'
import { ThemeProvider } from './contexts/ThemeContext'
import I18n from './i18n/I18n'
import Translator from './i18n/Translator'


export function App() {
  
  const AppSection = styled.section `
    display: flex;
    flex-direction: column;
    gap: 172px;
  `
  const AppHeaderSection = styled.section `
    display: flex;
    flex-direction: column;
    gap: 15px;
  `

  return (
    <ThemeProvider>
      <AppHeaderSection>
        <Header />
        <Introduction />
      </AppHeaderSection>
      <AppSection>
        <About />
        <Works />
        <MyServices />
        <Companies />
        <MyProcess />
        <ChoosePlan />
      </AppSection>

      <ToggleTheme />
      <I18n />
      <Translator path="home.message" />
    </ThemeProvider>
  )
}
