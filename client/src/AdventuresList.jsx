import React from 'react';
import { Link } from 'react-router-dom';

function AdventuresList({adventures, handleAdventureSelect}) {
  var contents;
  if (adventures) {
    contents = (
      <div>
        {adventures.map( (adventure, i) => 
          <div key={i}>
            <h3>{adventure.name}</h3>
            <Link to='/adventure'>
              <button onClick={() => handleAdventureSelect(adventure._id)} > Go On This Adventure! </button>
            </Link>
          </div>
        )}
      </div>
    )
  } else {
    contents = <p>No adventures yet</p>
  }

  return(
    <>
      {contents}
    </>
  )
}

export default AdventuresList;