import React from "react";
import Form from "./components/Form";
import SearchBar from './components/searchBar';
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
        <Form videogameSearch={getGame} />
      </Container>
    </div>
  );
}

export default App;
