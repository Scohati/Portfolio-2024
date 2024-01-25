import { createContext, useState, useContext } from 'react'
import { styled } from 'styled-components'
import colors from '../theme/colors'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const ThemeSection = styled.section `
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme == 'light' ? colors.white : colors.text};
    padding-top: 32px;
  `


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSection theme={theme}>
        {children}
      </ThemeSection>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);