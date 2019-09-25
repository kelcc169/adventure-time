import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';

import UserPin from './UserPin';

import { IViewport, IUserLocation } from './react-app-env';

const MapBox: React.FC = () => {
  const [ view, setView ] = useState<IViewport>({latitude: 47.6, longitude: -122.3, zoom: 10});
  const [ settings, setSettings ] = useState({minZoom: 0, maxZoom: 14})
  const [ userLocation, setUserLocation ] = useState<IUserLocation>({latitude: 44.6, longitude: -122.3} as IUserLocation);
  const [ intervalHandle, setIntervalHandle ] = useState();

  const MAPBOX_TOKEN: string = 'pk.eyJ1Ijoia2VsY2MxNjkiLCJhIjoiY2p4YzFnODJhMGh4dDN5bWFkOHdpaGxkYSJ9.P05Jkczde1J1vx7262976A'

  function getUserLocation() {
		navigator.geolocation.getCurrentPosition(position => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    });
    console.log(userLocation)
  } 

  useEffect(() => {
    let handle = setInterval(getUserLocation, 1500)
    setIntervalHandle(handle)
    clearInterval(intervalHandle)
    console.log('hello')
  }, [])

  return(
    <div className="map">
      <ReactMapGL {...view}
        {...settings}
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