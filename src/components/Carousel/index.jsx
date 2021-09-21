import React from 'react'
import testImg from '../../assets/restaurante-fake.png'
import { ImageCard } from '../ImageCard'
import { StyledCarousel, StyledSlider } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  return (
    <StyledCarousel>
      <h1>Na sua área</h1>

      <StyledSlider {...settings}>
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
        <ImageCard img={testImg} />
      </StyledSlider>
    </StyledCarousel>
  )
}
