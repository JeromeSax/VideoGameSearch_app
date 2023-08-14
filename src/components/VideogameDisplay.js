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
            <ol className="list-text" key={index} >{singleGame.name}</ol>
          ))}
        </ul>
      ) : (
        <p>No games to display</p>
      )}
      <button className="button-1"onClick={handleButtonClick}>Find what you were looking for?</button>
    </div>
  );
}

export default VideogameDisplay