import React from 'react'
import { Aside } from 'src/components/Aside'
import { Map } from 'src/components/Map'
import { Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Aside />
      <Map />
    </Wrapper>
  )
}
