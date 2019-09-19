import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AdventureList from './AdventureList';
import CreateAdventure from './CreateAdventure';
import AdventureTime from './AdventureTime';

import { IAdventure, IProfile } from './react-app-env';

const Profile: React.FC<IProfile> = ({userId}) => {
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
      {userId}
      <Route exact path='/' render={() => 
        <AdventureList adventures={adventures} 
          setSelectedAdventure={setSelectedAdventure} /> } />
      <Route path='/create' render={() => 
        <CreateAdventure /> } />
      <Route path='/adventure' render={() =>
        <AdventureTime selectedAdventure={selectedAdventure} /> } />
    </>
  )
}

export default Profile;