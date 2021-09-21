import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  font: 400 16px ${({ theme }) => theme.fonts.regular};

  h1 {
    font-weight: bold;
    line-height: 29px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
  }
`
