import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  font: 400 16px ${({ theme }) => theme.fonts.regular};

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
`
