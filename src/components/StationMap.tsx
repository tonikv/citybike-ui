/*
  Show station on map. 
*/

import { useCallback, useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button } from 'react-bootstrap';
import { IStationMap } from '../types'

const center:any = [60.192059, 24.945831]
const zoom = 15

// Create marker to current selected station coordinates
function LocationMarker( {position}:any ):any {
  return position === null ? null : (
    <Marker position={[position.y, position.x]}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

// Update onview coordinates and show station location when clicked
function DisplayPosition({ map, coords }:any) {
  const [position, setPosition] = useState(map.getCenter())

    const onClick = useCallback(() => {
      map.setView([coords.y, coords.x], zoom)
  }, [map, coords])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <Button variant="secondary" onClick={onClick}>Find Station</Button>
    </p>
  )
}

const StationMap:React.FC<IStationMap> = ( {coords} ) => {
  const [map, setMap]:any = useState(null)

  const displayMap = useMemo(
    () => (
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coords ? <LocationMarker
          position={coords}
        />: <></>}
      </MapContainer>
    ),
    [coords],
  )

  return (
    <div>
      {map ? <DisplayPosition map={map} coords={coords} /> : null}
      {displayMap}
    </div>
  )
}

export default StationMap