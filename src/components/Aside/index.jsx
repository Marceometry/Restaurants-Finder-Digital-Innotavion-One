import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import testImg from '../../assets/restaurante-fake.png'
import { Carousel } from '../Carousel'
import { RestaurantCard } from '../RestaurantCard'
import { SearchBox } from '../SearchBox'
import { Modal } from '../Modal'
import { AsideBody, AsideHeader, Container } from './styles'

export function Aside() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}
