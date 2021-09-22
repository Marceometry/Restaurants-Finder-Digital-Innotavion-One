import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Home } from './pages/Home'

import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyles } from './styles/GlobalStyles'
import theme from './theme'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}
