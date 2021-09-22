import React from 'react'
import { StyledCard } from './styles'

export function ImageCard({ img, name }) {
  return (
    <StyledCard style={{ backgroundImage: `url(${img})` }}>
      <p>{name}</p>
    </StyledCard>
  )
}
