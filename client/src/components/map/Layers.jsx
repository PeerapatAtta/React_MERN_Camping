//rafce
import React from 'react'
import { LayersControl, MapContainer, TileLayer, Marker, Popup, LayerGroup, Tooltip } from 'react-leaflet'
import { useState, useEffect } from 'react'
import { listCamping } from '@/api/camping';

const Layers = () => {

    const [landmarks, setLandmarks] = useState([]);

    // Fetch landmarks when the component mounts
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
        <LayersControl >
            <LayersControl.BaseLayer checked name="OSM">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite">
                <TileLayer
                    attribution='&copy; <a href="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community">OpenStreetMap</a> contributors'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Landmark" checked>
                <LayerGroup>
                    {landmarks.map((item) => {
                        return (
                            <Marker key={item.id} position={[item.lat, item.lng]}>
                                <Popup>
                                    {item.title} <br /> {item.description}
                                </Popup>
                                <Tooltip>
                                    {item.title}
                                </Tooltip>
                            </Marker>
                        );
                    })}
                </LayerGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )
}

export default Layers