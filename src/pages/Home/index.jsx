import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Aside } from '../../components/Aside'
import { Modal } from '../../components/Modal'
import { SkeletonLoader } from '../../components/Loader/Skeleton'
import Map from '../../components/Map'
import { Wrapper } from './styles'

export function Home() {
  const { restaurant } = useSelector((state) => state.restaurants)
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
        {restaurant ? (
          <>
            <h1>Nome do Restaurante</h1>
            <span className='phone'>(51) 98432-2346</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adip sit amet, consectetur
              adip.
            </p>

            <span className='is-restaurant-open'>Fechado</span>
          </>
        ) : (
          <>
            <SkeletonLoader width='300px' height='24px' />
            <SkeletonLoader width='115px' height='16px' margin='16px 0 20px' />
            <SkeletonLoader width='500px' height='16px' />
            <SkeletonLoader width='50px' height='16px' margin='8px 0 24px' />
            <SkeletonLoader width='180px' height='16px' />
          </>
        )}
      </Modal>
    </Wrapper>
  )
}
