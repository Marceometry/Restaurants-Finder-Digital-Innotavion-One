import React from 'react'
import logo from '../../assets/logo.svg'
import testImg from '../../assets/restaurante-fake.png'
import { Carousel } from '../Carousel'
import { RestaurantCard } from '../RestaurantCard'
import { SearchBox } from '../SearchBox/index'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside() {
  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox />
        <Carousel />
      </AsideHeader>
      <AsideBody>
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
      </AsideBody>
    </Container>
  )
}
