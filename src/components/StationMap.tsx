/**
 * Render map with react-leaflet.
 */

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { IStationMap } from '../types'
import { useEffect } from 'react'

const center:any = [60.192059, 24.945831]
const defaultZoom = 15

type ICoords = {
    lat: number;
    lng: number;
};

// Update onview coordinates and show station location when station changed.
function ChangeMapView({ position }: { position: ICoords }) {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng], defaultZoom);
  }, [position, map]);

    return (
      <>
        <Marker position={[position.lat, position.lng]}>
          <Popup>Station is here</Popup>
        </Marker>
      </>
    );
}

const StationMap: React.FC<IStationMap> = ({ station }) => {
        const stationPosition:ICoords = {
          lat: station.y,
          lng: station.x
        }


  return (
          <MapContainer center={center} zoom={defaultZoom} scrollWheelZoom={true} className='map-container'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <ChangeMapView position={stationPosition} />
        </MapContainer>
      )
}

export default StationMap
