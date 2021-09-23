import React from 'react'
import testImg from '../../assets/restaurante-fake.png'
import { ImageCard } from './ImageCard'
// import { LottieLoader } from '../Loader/Lottie'
import { StyledCarousel, StyledSlider } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel({ items }) {
  // if (items.length === 0) return <LottieLoader />

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
        {items
          ? items.map((item) => (
              <ImageCard
                key={item.place_id}
                name={item.name}
                img={item.photos ? item.photos[0].getUrl() : ''}
              />
            ))
          : ''}
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img='a' name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
        <ImageCard img={testImg} name='Nome do restaurante' />
      </StyledSlider>
    </StyledCarousel>
  )
}
