import React, { useEffect, useState } from 'react'
import { SkeletonLoader } from '../../Loader/Skeleton'
import { StyledCard } from './styles'

export function ImageCard({ img, name, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = img

    imageLoader.addEventListener('load', () => setImageLoaded(true))
    imageLoader.addEventListener('error', () => setImageLoaded(true))

    return () => {
      imageLoader.removeEventListener('load', () => setImageLoaded(true))
      imageLoader.removeEventListener('error', () => setImageLoaded(true))
    }
  }, [img])

  return (
    <StyledCard backgroundImage={img} onClick={onClick}>
      {!imageLoaded && <SkeletonLoader width='100%' height='100%' absolute />}
      <p>{name}</p>
    </StyledCard>
  )
}
