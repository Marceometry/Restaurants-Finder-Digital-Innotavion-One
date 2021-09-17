import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Reset } from 'styled-reset'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  )
}
