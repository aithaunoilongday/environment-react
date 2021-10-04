import React, { useMemo, useRef, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MapContainer, Marker, Popup, TileLayer, Polyline, Polygon, Circle } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import WrapperMap from './styles';
import ReactDOMServer from 'react-dom/server';

// custom icon
const locationIcon = L.divIcon({
  className: 'custom-icon',
  html: ReactDOMServer.renderToString(<HiLocationMarker size={30} />)
});

const center = {
  lat: 36.295386,
  lng: 136.255921
};

export const ViewMap = () => {
  const markerRef = useRef(null);
  const [currentLocation] = useState<LatLngExpression>([36.295386, 136.255921]);
  const [position, setPosition] = useState<LatLngExpression>(center);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        console.log(marker);
        if (marker !== null) {
          // setPosition(marker._latlng);
        }
      }
    }),
    []
  );

  return (
    <WrapperMap>
      <MapContainer
        center={currentLocation}
        zoom={17}
        zoomControl={false}
        style={{ width: '100%', height: '80vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={locationIcon}
          draggable
          ref={markerRef}
          eventHandlers={eventHandlers}
        >
          <Popup>User Location</Popup>
        </Marker>
        <Polyline
          color="#220bb9"
          positions={[
            {
              lat: 36.295386,
              lng: 136.255921
            },
            {
              lat: 36.3187043303,
              lng: 136.259745886
            }
          ]}
        />
        <Polygon
          color="#00bfff"
          positions={[
            {
              lat: 36.295386,
              lng: 136.255921
            },
            {
              lat: 36.27201585624873,
              lng: 136.36340919655922
            },
            {
              lat: 36.29533418652255,
              lng: 136.36723408247832
            }
          ]}
        />
        <Circle
          color="#d663e8"
          fillColor="#d663e8"
          radius={400}
          center={[36.3187043303, 136.259745886]}
        />
      </MapContainer>
    </WrapperMap>
  );
};
