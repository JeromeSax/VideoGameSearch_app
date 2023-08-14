import React from 'react'

function VideogameDisplay({game}) {

  const handleButtonClick = () => {
    alert("Didn't find what you were looking for? Cry about it why don't yah...")
  }


return (
    <div>
      <h1 className='header-1'>Game List</h1>
      {/* check if there are games available */}
      {game.length > 0 ? (
        <ul>
          {game.map((singleGame, index) => (
            // maps through games and displays them
            <ol className="list-text" key={index} >{singleGame.name}</ol>
          ))}
        </ul>
        // if else operator, if there are no games, display a message
      ) : (
        <p>No games to display</p>
      )}
      <button className="button-1"onClick={handleButtonClick}>Find what you were looking for?</button>
    </div>
  );
}

export default VideogameDisplay