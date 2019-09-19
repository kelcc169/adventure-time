import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';

import AdventureList from './AdventureList';

import { IAdventure } from './react-app-env';

const Profile: React.FC = () => {
  const [ adventures, setAdventures ] = useState<IAdventure[]>([]);
  // const [ userLists, setUserLists ] = useState<IAdventure[]>([]);
  const [ selectedAdventure, setSelectedAdventure ] = useState<string>('');

  useEffect(() => {
    axios.get('/api/adventures')
      .then(res => {
        setAdventures(res.data.adventures)
      })
  }, [adventures])

  return(
    <>
      <AdventureList adventures={adventures} setSelectedAdventure={setSelectedAdventure} />
    </>
  )
}

export default Profile;