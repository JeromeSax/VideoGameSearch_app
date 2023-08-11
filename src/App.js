import React from "react";
import Form from "./components/Form";
import VideogameDisplay from "./components/VideogameDisplay";
import ReviewsDisplay from "./components/ReviewsDisplay";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from "./components/Footer"
import "./App.css";

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: lightgreen;
  font-size: 12px;
  border-radius: 10px 10px 10px 10px;
  box-shadow:  0 0 20px #FF0000, 0 0 10px #0000FF;
  text-shadow: 0 0 2px #FF0000, 0 0 6px #0000FF;
  
`

function App() {

  const [form, setForm] = useState({
    searchTerm: ''
});

  const [game, setGame] = useState([]);
  // const [gameId, setGameId] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getGames = async (searchTerm) => {
    const url = `https://opencritic-api.p.rapidapi.com/game/search?criteria=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9506c29c54mshdfecaae160925a7p15dc51jsn9863a6a8ce1e',
        'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setGame(result)
    } catch (error) {
      console.error(error);
    }
    // console.log(game)
  }

// Function to fetch reviews for a specific game
const getGameReviews = async (gameId) => {
  console.log(typeof gameId)
  const url = `https://opencritic-api.p.rapidapi.com/reviews/game/${gameId}?skip=20`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '9506c29c54mshdfecaae160925a7p15dc51jsn9863a6a8ce1e',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setReviews(result); 
  } catch (error) {
    console.error(error);
  }
} 


  // useEffect(() => {
  //   getGames()
  // }, [])


 

const handleChange = (e) => {
    // console.log(e.target.value)
    setForm ({
        ...form,
        searchTerm: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    getGames();
    getGameReviews();
    form.searchTerm= "";
}



  return (
    <div>
      <Container className="App">
        <h1>Game Finder+</h1>
        <Form  handleSubmit={handleSubmit} handleChange={handleChange} form={form} />
        <VideogameDisplay game={game}  />
        <ReviewsDisplay reviews={reviews} />
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
