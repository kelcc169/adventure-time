import React from 'react';
import { Link } from 'react-router-dom';

import { IAdventureList, IAdventure } from './react-app-env';

const AdventureList: React.FC<IAdventureList> = ({adventures, setSelectedAdventure}) => {
  let content;

  if (!adventures) {
    content = <p>No Adventures!</p>
  } else {
    content = (
      adventures.map((adventure: IAdventure, index: number) => 
        <div key={index}>
          <Link to='/adventure'>
            <button onClick={() => {setSelectedAdventure(adventure._id)}} >{adventure.name}</button>
          </Link>
        </div>
      )
    )
  }
  
  return(
    <>
      {content}
    </>
  )
}

export default AdventureList;