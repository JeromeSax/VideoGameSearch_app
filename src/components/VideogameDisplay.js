import React from 'react'

function VideogameDisplay({game}) {

  // const loaded =() => {
  //   return (
  //     <div>
  //       <h1>{game.name}</h1>
  //     </div>
  //   );
  // };

  // const loading = () => {
  //   return <h1>No Game to Display</h1>
  // }
// console.log(game)
// return game ? loaded() : loading()

return (
    game.map((game, index) => {
      return (
        <ul>
          <li>{game.name}</li>
        </ul>
      )
    }
  )
)}

export default VideogameDisplay