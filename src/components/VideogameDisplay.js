import React from 'react'

function VideogameDisplay({game}) {

const loaded = () => {
return (
    game.map((oneGame, index) => {
      return (
        <div>
          <h1>Game</h1>
        <ul key={index}>
          <li>{oneGame.name}</li>
        </ul>
        </div>
      )
    }
  )
)}

// Defines a function to render the loading state
const loading = () => {
  return <h1>No Game to Display</h1>
}
// Checks if the game data is available and renders the right state
return game ? loaded() : loading();
  }

export default VideogameDisplay