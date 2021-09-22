import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Reset } from 'styled-reset'
import { GlobalStyles } from './styles/GlobalStyles'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
