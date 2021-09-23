import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Aside } from '../../components/Aside'
import { Modal } from '../../components/Modal'
import Map from '../../components/Map'
import { Wrapper } from './styles'

export function Home() {
  // const { restaurant } = useSelector((state) => state.restaurants)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [placeId, setPlaceId] = useState('')
  const [query, setQuery] = useState('')

  function handleOpenModal(placeId) {
    setPlaceId(placeId)
    setIsModalOpen(true)
  }

  return (
    <Wrapper>
      <Aside setQuery={setQuery} handleOpenModal={handleOpenModal} />

      <Map query={query} placeId={placeId} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Nome do Restaurante</h1>
        <span className='phone'>(51) 98432-2346</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adip sit amet, consectetur
          adip.
        </p>

        <span className='is-restaurant-open'>Fechado</span>
      </Modal>
    </Wrapper>
  )
}
