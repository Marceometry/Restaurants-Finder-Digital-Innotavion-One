import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { StyledRestaurantCard } from './styles'

export function RestaurantCard({ name, stars, address, img }) {
  return (
    <StyledRestaurantCard>
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

      <img src={img} alt={name} />
    </StyledRestaurantCard>
  )
}
