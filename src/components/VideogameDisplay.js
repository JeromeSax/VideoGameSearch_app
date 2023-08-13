import React from 'react'

function VideogameDisplay({game}) {

  const handleButtonClick = () => {
    alert("Didn't find what you were looking for? Cry about it why don't yah...")
  }


return (
    <div>
      <h1>Game List</h1>
      {game.length > 0 ? (
        <ul>
          {game.map((singleGame, index) => (
            <li key={index} >{singleGame.name}</li>
          ))}
        </ul>
      ) : (
        <p>No games to display</p>
      )}
      <button onClick={handleButtonClick}>Find what you were looking for?</button>
    </div>
  );
}

export default VideogameDisplay