import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapBox: React.FC = () => {
  const [ view, setView ] = useState({latitude: 47.6, longitude: -122.3, zoom: 10});

  const TOKEN: string = 'pk.eyJ1Ijoia2VsY2MxNjkiLCJhIjoiY2p4YzFnODJhMGh4dDN5bWFkOHdpaGxkYSJ9.P05Jkczde1J1vx7262976A'

  return(
    <div className="map">
      <ReactMapGL {...view}
        width={"90vw"}
        height={400}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => 
          setView({latitude: viewport.latitude, longitude: viewport.longitude, zoom: viewport.zoom})} 
        />
    </div>
  )
}

export default MapBox;