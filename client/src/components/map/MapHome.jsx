//rafce
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Layers from './Layers';

const MapHome = () => {

  return (
    <div>
      <MapContainer
        className='h-[50vh] rounded-md z-0'
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layers />
      </MapContainer>
    </div>
  )
}

export default MapHome