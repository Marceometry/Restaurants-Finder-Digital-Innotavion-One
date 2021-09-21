import styled from 'styled-components'
import Slider from 'react-slick'

export const StyledCarousel = styled.div`
  width: 100%;
`

export const StyledSlider = styled(Slider)`
  margin-top: 16px;

  .slick-slide {
    width: 90px !important;
    height: 90px !important;
    margin: 0 4px;
  }

  .slick-slide:first-child {
    margin-left: 0;
  }

  .slick-slide:last-child {
    margin-right: 0;
  }
`
