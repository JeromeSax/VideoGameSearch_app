import React from "react";
import SearchBar from './components/searchBar';
import { useState, useEffect } from 'react';

function App() {

const APIKEY = ''
const [game, setGame] = useState(null)

const getGame = async (searchTerm) => {
  try {
    const response = await fetch(``)
    const data = await response.json();
    // console.log(data)
    setGame(data)

  } catch (error) {
    console.log(error)
  }
}


useEffect(() => {
  getGame('')
}, [])

  return (
    <div>
      Hello world!
      <SearchBar />
    </div>
  );
}

export default App;
