import React from 'react'

function VideogameDisplay({game}) {

  const loaded =() => {
    return (
      <div>
        <h1>{game.Authors[0].name}</h1>
        <h1>{game._id}</h1>
        <h1>{game.snippet}</h1>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Game to Display</h1>
  }

  return game? loaded() : loading()
}

export default VideogameDisplay