import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';

import AdventuresList from './AdventuresList';
import AdventurePage from './AdventurePage';

function LandingPage(props) {
  const [ adventures, setAdventures ] = useState([])
  const [ adventureId, setAdventureId ] = useState({})

  // get list of adventures when component loads
  useEffect(() => {
    axios.get('/api').then(res => {
      setAdventures(adventures)
    })
  }, [adventures])

  return(
    <>
      <p>Hello</p>
      <Route exact path='/' render={() => 
        <AdventuresList adventures={adventures} 
          handleAdventureSelect={setAdventureId} /> }
      />
      <Route path='/adventure' render={() =>
        <AdventurePage adventureId={adventureId} /> }
      />
    </>
  )
}

export default LandingPage;