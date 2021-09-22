import styled from 'styled-components'

export const MapContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.text};

  > div {
    width: calc(100vw - 380px) !important;
  }
`
