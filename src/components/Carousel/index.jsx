import React from 'react'
import { ImageCard } from './ImageCard'
import { LottieLoader } from '../Loader/Lottie'
import { StyledCarousel, StyledSlider } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel({ items, handleOpenModal }) {
  if (!items) return <LottieLoader />

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
                onClick={() => handleOpenModal(item.place_id)}
              />
            ))
          : ''}
      </StyledSlider>
    </StyledCarousel>
  )
}
