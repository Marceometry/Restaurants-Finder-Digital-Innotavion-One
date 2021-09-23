import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Aside, Map, Modal, SkeletonLoader } from '../../components'
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
            <h1>{restaurant.name}</h1>
            <span className='phone'>{restaurant.formatted_phone_number}</span>

            <p>
              {restaurant.formatted_address || restaurant.restaurant.vicinity}
            </p>

            <span className='is-restaurant-open'>
              {restaurant.opening_hours.open_now
                ? 'Aberto agora'
                : 'Fechado no momento'}
            </span>
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
