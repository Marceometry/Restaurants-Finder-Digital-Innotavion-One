import React from 'react'
import Lottie from 'react-lottie'
import animation from '../../assets/restaurants-loading.json'

export function Loader() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={options} />
}
