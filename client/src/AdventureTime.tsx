import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { IAdventureTime } from './react-app-env';

const AdventureTime: React.FC<IAdventureTime> = ({selectedAdventure}) => {
  const [ adventure, setAdventure ] = useState([]);

  useEffect(() => {
    axios.get(`/api/adventures/${selectedAdventure}`)
      .then(res => {
        setAdventure(res.data.adventure)
      })
  }, [selectedAdventure])

  return(<p>AdventureTime!</p>)
}

export default AdventureTime;