import styled from 'styled-components'

export const StyledRestaurantCard = styled.a`
  flex: 1;
  padding: 16px;
  padding-left: 12px;
  border-left: 4px solid transparent;
  background-color: #fff;
  transition: 0.2s;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #f5f5f5;
    border-left-color: ${({ theme }) => theme.colors.primary};
  }

  > div:first-child {
    max-width: 226px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .stars {
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    width: 96px;
    height: 96px;
    border-radius: 8px;
    object-fit: cover;
  }
`
