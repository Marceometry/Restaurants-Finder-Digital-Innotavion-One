import React, { useEffect, useState } from 'react'
import { GoogleApiWrapper, Map as GoogleMap, Marker } from 'google-maps-react'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurants } from '../../redux/modules/restaurants'
import { MapContainer } from './styles'

export function Map({ google, query }) {
  const dispatch = useDispatch()
  const { restaurants } = useSelector((state) => state.restaurants)
  const [map, setMap] = useState(null)

  useEffect(() => {
    searchByQuery(query)
  }, [query])

  function searchByQuery(query) {
    // const service = new google.maps.places.PlacesService(map)

    // const request = {
    //   location: map.center,
    //   radius: '1000',
    //   type: ['restaurant'],
    //   query,
    // }

    // service.textSearch(request, (results, status) => {
    // if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(query)
    // }
    // })
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map)

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    }

    service.nearbySearch(request, (results, status) => {
      console.log(status)
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }

  function onMapReady(_, map) {
    setMap(map)
    searchNearby(map, map.center)
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
