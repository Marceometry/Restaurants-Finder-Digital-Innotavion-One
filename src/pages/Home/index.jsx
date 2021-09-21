import React from 'react'
import { Aside } from '../../components/Aside'
import { Map } from '../../components/Map'
import { Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Aside />
      <Map />
    </Wrapper>
  )
}
