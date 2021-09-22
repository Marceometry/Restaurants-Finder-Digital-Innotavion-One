import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: center;
  text-align: center;

  overflow: hidden;
  cursor: pointer;
  transform: scale(0.95);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1);
  }

  p {
    margin: 6px;
    font-size: 14px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.shadow};
  }
`
