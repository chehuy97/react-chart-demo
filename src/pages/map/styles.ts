import styled from 'styled-components'
import { MapContainer } from 'react-leaflet'
import { sizes } from '../../utils/styles'

export const MapView = styled(MapContainer)`
    width: 100vw-${sizes.appNavBarLeftWidth};
    height: 100vh;
    /* overflow: hidden; */
`