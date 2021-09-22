import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.shadow};
  backdrop-filter: blur(2px);
  transition: 0.2s;
  z-index: 999;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dialog = styled.div`
  max-width: 500px;
  max-height: calc(100% - 144px);
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`