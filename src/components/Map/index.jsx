import React from 'react'
import { GoogleApiWrapper, Map as GoogleMap, Marker } from 'google-maps-react'
import { MapContainer } from './styles'

export function Map({ google }) {
  return (
    <MapContainer>
      <GoogleMap google={google} centerAroundCurrentLocation />
    </MapContainer>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(Map)
