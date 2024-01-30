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
import { ThemeProvider } from './contexts/ThemeContext'
import Controls from './widgets/Controls'


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

      <Controls />
    </ThemeProvider>
  )
}
