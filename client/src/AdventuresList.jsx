import React from 'react'

function AdventuresList({adventures, handleAdventureSelect}) {
  if (adventures) {
    contents = (
      <div>
        {adventures.map( (adventure, i) => 
          <div key={i}>
            <h3>{adventure.name}</h3>
            <Link to='/adventure'>
              <button onClick={handleAdventureSelect} value={adventure._id} > Go On This Adventure! </button>
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