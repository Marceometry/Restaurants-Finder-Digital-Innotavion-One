import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  h1,
  h2 {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    line-height: 29px;
    font-size: 24px;
  }

  h2 {
    line-height: 24px;
    font-size: 20px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.shadow};
    border-radius: 8px;
    transition: 0.2s;
  }

  /* ::-webkit-scrollbar-thumb:active {
    background: var(--blue-dark);
  } */
`
