import React from 'react'
import { StyledCard } from './styles'

export function ImageCard({ img }) {
  return <StyledCard style={{ backgroundImage: `url(${img})` }} />
}
