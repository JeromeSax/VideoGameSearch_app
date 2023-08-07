import React from "react";
import Form from "./components/Form";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./App.css";

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: lightgreen;
  font-size: 14px;
  color: White;
  border-radius: 10px 10px 0 0;
`

function App() {

const APIKEY = '9506c29c54mshdfecaae160925a7p15dc51jsn9863a6a8ce1e'
const [game, setGame] = useState(null)

const getGame = async (searchTerm) => {
  try {
    const response = await fetch(`https://opencritic-api.p.rapidapi.com/?APIKEY=${APIKEY}&t=${searchTerm}`)
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
        <h1>Game Finder+</h1>
        <Form videogameSearch={getGame} />
      </Container>
    </div>
  );
}

export default App;
