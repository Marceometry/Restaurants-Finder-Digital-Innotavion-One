import styled, { keyframes } from 'styled-components'

const AppearAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Overlay = styled.div`
  animation: ${AppearAnimation} 0.3s both;
  background-color: ${({ theme }) => theme.colors.shadow};
  backdrop-filter: blur(2px);
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

  .phone {
    margin: 12px 0 16px;
  }

  .is-restaurant-open {
    margin-top: 16px;
  }
`
