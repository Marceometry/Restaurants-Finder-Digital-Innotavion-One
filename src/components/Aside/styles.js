import styled from 'styled-components'

export const Container = styled.aside`
  width: 380px;
  background: ${({ theme }) => theme.colors.background};
  overflow-y: scroll;
`

export const AsideHeader = styled.header`
  background: #fff;
  padding: 32px 24px 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  > img {
    width: 70%;
  }
`
