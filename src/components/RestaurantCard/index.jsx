import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { SkeletonLoader } from '../Loader/Skeleton'
import { StyledRestaurantCard } from './styles'

export function RestaurantCard({ name, stars, address, img, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  setTimeout(() => {
    setImageLoaded(true)
  }, 1500)

  return (
    <StyledRestaurantCard onClick={onClick}>
      <div>
        <h2>{name}</h2>

        <div className='stars'>
          <ReactStars
            isHalf
            value={stars}
            count={5}
            size={16}
            edit={false}
            activeColor='#ecc500'
          />
        </div>

        <p>{address}</p>
      </div>

      <img
        src={img}
        alt={name}
        // onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'initial' : 'none' }}
      />
      {!imageLoaded && <SkeletonLoader width='96px' height='96px' />}
    </StyledRestaurantCard>
  )
}
