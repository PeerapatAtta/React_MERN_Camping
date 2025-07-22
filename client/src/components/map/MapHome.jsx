//rafce
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react'
import { listCamping } from '@/api/camping';

const MapHome = () => {
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    hdlGetLandmark();
  }, []);

  const hdlGetLandmark = () => {
    console.log('Get Landmarks');
    listCamping()
      .then((res) => {
        console.log('Get Landmarks Success', res.data);
        setLandmarks(res.data.result);
      })
      .catch((err) => {
        console.error('Get Landmarks Error', err);
      });
  }

  return (
    <div>
      <MapContainer
        className='h-[50vh] rounded-md z-0'
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {landmarks.map((item, index) => (
          <Marker key={index} position={[item.lat, item.lng]}>
            <Popup>
              {item.title} <br /> {item.description}
            </Popup>
          </Marker>
        ))}
        <Marker position={[13, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapHome