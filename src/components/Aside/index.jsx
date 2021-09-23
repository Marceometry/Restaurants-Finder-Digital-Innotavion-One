import React from 'react'
import logo from '../../assets/logo.svg'
import testImg from '../../assets/restaurante-fake.png'
import { useSelector } from 'react-redux'
import { Carousel } from '../Carousel'
import { RestaurantCard } from '../RestaurantCard'
import { SearchBox } from './SearchBox'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside({ setQuery, handleOpenModal }) {
  const { restaurants } = useSelector((state) => state.restaurants)

  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox setQuery={setQuery} />
        <Carousel />
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
        <RestaurantCard
          name='Nome desse Restaurante'
          stars={5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          onClick={() => handleOpenModal('1')}
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          onClick={() => handleOpenModal('2')}
          img={testImg}
        />
      </AsideBody>
    </Container>
  )
}
