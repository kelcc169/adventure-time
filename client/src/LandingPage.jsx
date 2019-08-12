import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';

import AdventuresList from './AdventuresList';

function LandingPage(props) {
  const [ adventures, setAdventures ] = useState([])
  const [ adventure, setAdventure] = useState({})

  // get list of adventures at component did render
  useEffect(() => {
    axios.get('/api').then(res => {
      setAdventures(adventures)
    })
  }, [])

  // go on the adventure selected, yay!
  useEffect(() => {

  }, [adventure])

  return(
    <>
      <Route exact path='/' render={() => 
        <AdventuresList adventures={adventures} 
          handleAdventureSelect={setAdventure} /> }
      />
    </>
  )
}

export default LandingPage;