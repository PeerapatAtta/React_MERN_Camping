import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

function LocationMarker({ position, setPosition, setValue }) {

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng)

            if (setValue) {
                setValue('lat', e.latlng.lat)
                setValue('lng', e.latlng.lng)
            }
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const Mainmap = ({ register, location, setValue }) => {

    const [position, setPosition] = useState(null)
    const DEFAULT_LOCATION = [13.736717, 100.523186] // Bangkok, Thailand

    return (
        <div>
            {
                register && <>
                    <input hidden {...register('lat')} />
                    <input hidden {...register('lng')} />
                </>
            }
            <h1 className="text-2xl font-semibold mt-4">Map (Select Location)</h1>
            {
                position && (
                    <p className="text-sm text-gray-500">
                        Latitude: {position.lat.toFixed(2)}, Longitude: {position.lng.toFixed(2)}
                    </p>
                )
            }
            <MapContainer
                className="h-[50vh] w-full rounded-md z-0"
                center={location || DEFAULT_LOCATION}
                zoom={7}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={location}>
                    <Popup>Location</Popup>
                </Marker>

                <LocationMarker
                    position={position}
                    setPosition={setPosition}
                    setValue={setValue}
                />
            </MapContainer>
        </div>
    )
}

export default Mainmap