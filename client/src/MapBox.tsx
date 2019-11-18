import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import UserPin from './UserPin';

import { IViewport, IUserLocation } from './react-app-env';

const MapBox: React.FC = () => {
  const [ view, setView ] = useState<IViewport>({latitude: 0, longitude: 0, zoom: 10});
  const [ userLocation, setUserLocation ] = useState<IUserLocation>({latitude: 0, longitude: 0});

  const MAPBOX_TOKEN: string = 'pk.eyJ1Ijoia2VsY2MxNjkiLCJhIjoiY2p4YzFnODJhMGh4dDN5bWFkOHdpaGxkYSJ9.P05Jkczde1J1vx7262976A'

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
      setView({latitude: position.coords.latitude, longitude: position.coords.longitude, zoom: 14});
    })
  }, [])

  return(
    <div className="map">
      <ReactMapGL {...view}
        width={"90vw"}
        height={400}
        maxZoom={14}
        minZoom={10}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => 
          setView({latitude: viewport.latitude, longitude: viewport.longitude, zoom: viewport.zoom})} 
          >
        <Marker 
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}>
          <UserPin />
        </Marker>
      </ReactMapGL>
    </div>
  )
}

export default MapBox;