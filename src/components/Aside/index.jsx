import React from 'react'
import logo from '../../assets/logo.svg'
import { Carousel } from '../Carousel'
import { SearchBox } from '../SearchBox/index'
import { AsideHeader, Container } from './styles'

export function Aside() {
  return (
    <Container>
      <AsideHeader>
        <img src={logo} alt='Logo' />
        <SearchBox />
        <Carousel />
      </AsideHeader>
    </Container>
  )
}
