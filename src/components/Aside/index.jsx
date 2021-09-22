import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Carousel } from '../Carousel'
import { RestaurantCard } from '../RestaurantCard'
import { SearchBox } from '../SearchBox'
import { Modal } from '../Modal'

import logo from '../../assets/logo.svg'
import testImg from '../../assets/restaurante-fake.png'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside(props) {
  const { restaurants } = useSelector((state) => state.restaurants)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox {...props} />
        <Carousel />
      </AsideHeader>
      <AsideBody>
        {restaurants
          ? restaurants.map((restaurant) => (
              <RestaurantCard
                name={restaurant.name}
                stars={restaurant.rating}
                address={restaurant.vicinity || restaurant.formattedAddress}
                img={restaurant.photos ? restaurant.photos[0].getUrl() : ''}
              />
            ))
          : ''}
        <RestaurantCard
          name='Nome desse Restaurante'
          stars={5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={3}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
        <RestaurantCard
          name='Nome do Restaurante'
          stars={4.5}
          address='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          img={testImg}
        />
      </AsideBody>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}
