import React from "react";
import SearchBar from './components/searchBar';
import { useState, useEffect } from 'react';
import "./App.css";

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  background-color: Black;
  font-size: 14px;
  border-radius: 10px 10px 0 0;
`

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
      <Container className="App">
      <h1>Hello world!</h1>
      <SearchBar />
      </Container>
    </div>
  );
}

export default App;
