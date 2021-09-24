import React, { useEffect, useState } from 'react'
import { GoogleApiWrapper, Map as GoogleMap, Marker } from 'google-maps-react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setRestaurants,
  setNearbyRestaurants,
  setRestaurant,
} from '../../redux/modules/restaurants'
import { MapContainer } from './styles'

export function Map({ google, query, placeId }) {
  const { restaurants } = useSelector((state) => state.restaurants)
  const [map, setMap] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) return
    searchByQuery(query)
  }, [query])

  useEffect(() => {
    if (!placeId) return
    getRestaurantById(placeId)
  }, [placeId])

  function getRestaurantById(placeId) {
    const service = new google.maps.places.PlacesService(map)

    const request = {
      placeId,
      fields: [
        'name',
        'opening_hours',
        'formatted_address',
        'formatted_phone_number',
      ],
    }

    service.getDetails(request, (place, status) => {
      console.log('getRestaurantById - ', place)
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place))
      }
    })
  }

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map)
    dispatch(setRestaurants())

    const request = {
      location: map.center,
      radius: '1000',
      type: ['restaurant'],
      query,
    }

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }

  function searchNearby(map, center, isFirstLoad) {
    const service = new google.maps.places.PlacesService(map)
    dispatch(setRestaurants())

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    }

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setNearbyRestaurants(results))
        isFirstLoad && dispatch(setRestaurants(results))
      }
    })
  }

  function onMapReady(_, map) {
    setMap(map)
    searchNearby(map, map.center, true)
  }

  return (
    <MapContainer>
      <GoogleMap
        google={google}
        onReady={onMapReady}
        onRecenter={onMapReady}
        centerAroundCurrentLocation
      >
        {restaurants
          ? restaurants.map((restaurant) => (
              <Marker
                key={restaurant.place_id}
                name={restaurant.name}
                position={{
                  lat: restaurant.geometry.location.lat(),
                  lng: restaurant.geometry.location.lng(),
                }}
              />
            ))
          : ''}
      </GoogleMap>
    </MapContainer>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(Map)
