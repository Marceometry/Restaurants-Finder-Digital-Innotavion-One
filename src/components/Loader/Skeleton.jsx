import React from 'react'
import styled, { keyframes } from 'styled-components'

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: .7;
  }
`

const Skeleton = styled.div`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #bbb;
  border-radius: 6px;
  animation: ${KeyFrameLoading} 1s linear infinite alternate;

  ${({ absolute }) =>
    absolute &&
    `
      position: absolute;
      bottom: 0
      right: 0;
      left: 0;
      top: 0;
    `}
`

export function SkeletonLoader({ width, height, margin, absolute }) {
  return (
    <Skeleton
      width={width}
      height={height}
      margin={margin}
      absolute={absolute}
    />
  )
}
