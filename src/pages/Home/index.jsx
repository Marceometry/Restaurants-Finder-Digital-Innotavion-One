import React, { useState } from 'react'
import { Aside } from '../../components/Aside'
import Map from '../../components/Map'
import { Wrapper } from './styles'

export function Home() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  return (
    <Wrapper>
      <Aside
        value={inputValue}
        setValue={setInputValue}
        handleKeyPress={handlePressEnter}
      />
      <Map query={query} />
    </Wrapper>
  )
}
