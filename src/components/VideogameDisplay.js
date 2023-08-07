import React from 'react'

function VideogameDisplay({game}) {

  const loaded =() => {
    return (
      <div>
        <h1>{game.Name}</h1>
      </div>
    );
  };
}

export default VideogameDisplay