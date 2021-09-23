import React from 'react'
import testImg from '../../assets/restaurante-fake.png'
import { useSelector } from 'react-redux'
import { ImageCard } from './ImageCard'
import { StyledCarousel, StyledSlider } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel() {
  const { restaurants } = useSelector((state) => state.restaurants)

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  return (
    <StyledCarousel>
      <h1>Na sua área</h1>

      <StyledSlider {...settings}>
        {restaurants
          ? restaurants.map((restaurant) => (
              <ImageCard
                name={restaurant.name}
                img={restaurant.photos ? restaurant.photos[0].getUrl() : ''}
              />
            ))
          : ''}
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
      </StyledSlider>
    </StyledCarousel>
  )
}
