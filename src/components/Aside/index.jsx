import React from 'react'
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux'
import { Carousel } from '../Carousel'
import { RestaurantCard } from './RestaurantCard'
import { SearchBox } from './SearchBox'
import { LottieLoader } from '../Loader/Lottie'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside({ setQuery, handleOpenModal }) {
  const { restaurants, nearbyRestaurants } = useSelector(
    (state) => state.restaurants
  )

  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox setQuery={setQuery} />
        <Carousel items={nearbyRestaurants} handleOpenModal={handleOpenModal} />
      </AsideHeader>

      <AsideBody>
        {restaurants ? (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.place_id}
              name={restaurant.name}
              stars={restaurant.rating}
              onClick={() => handleOpenModal(restaurant.place_id)}
              address={restaurant.vicinity || restaurant.formatted_address}
              img={restaurant.photos ? restaurant.photos[0].getUrl() : ''}
            />
          ))
        ) : (
          <LottieLoader />
        )}
      </AsideBody>
    </Container>
  )
}
