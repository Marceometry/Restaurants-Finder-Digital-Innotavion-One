import styled from 'styled-components'

export const Container = styled.aside`
  width: 380px;
  background: ${({ theme }) => theme.colors.background};
  overflow-y: scroll;
`

export const AsideHeader = styled.header`
  background: #fff;
  padding: 24px 16px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  > img {
    width: 70%;
  }
`

export const AsideBody = styled.main`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`
