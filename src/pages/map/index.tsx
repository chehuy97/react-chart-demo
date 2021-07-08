import { useEffect, useState } from "react";
import { TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import { MapView } from "./styles";

const Map = () => {
  const [position, setPosition]:[[number, number], (position:[number, number]) => void] = useState([16.071771,108.220139])

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e:any) {
        setPosition([e.latlng.lat, e.latlng.lng])
      },
      // locationfound(e:any) {
      //   setPosition(e.latlng)
      //   map.flyTo(e.latlng, map.getZoom())
      // },
    })
  
    return (
      <Marker position={position}>
        <Popup>{'Position is '+position[0]+', '+position[1]}</Popup>
      </Marker>
    )
  }

  return (
    <MapView center={position} zoom={14}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={position}>
      <Popup>
        That is a marker
      </Popup>
    </Marker> */}
    <LocationMarker/>
  </MapView>
  )
}

export default Map