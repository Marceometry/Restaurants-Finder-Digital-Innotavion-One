import React from 'react'
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux'
import { Carousel } from '../Carousel'
import { RestaurantCard } from './RestaurantCard'
import { SearchBox } from './SearchBox'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside({ setQuery, handleOpenModal }) {
  const { restaurants } = useSelector((state) => state.restaurants)

  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox setQuery={setQuery} />
        <Carousel items={restaurants} handleOpenModal={handleOpenModal} />
      </AsideHeader>

      <AsideBody>
        {restaurants
          ? restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.place_id}
                name={restaurant.name}
                stars={restaurant.rating}
                onClick={() => handleOpenModal(restaurant.place_id)}
                address={restaurant.vicinity || restaurant.formattedAddress}
                img={restaurant.photos ? restaurant.photos[0].getUrl() : ''}
              />
            ))
          : ''}
      </AsideBody>
    </Container>
  )
}
