import React from "react";
import Form from "./components/Form";
import VideogameDisplay from "./components/VideogameDisplay";
import ReviewsDisplay from "./components/ReviewsDisplay";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from "./components/Footer"
import controllerImage from './components/img/controller.png';
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 500px;
  margin: auto;
  color: white;
  text-align: center;
  font-size: 12px;
  border-radius: 10px 10px 10px 10px;
  box-shadow:  0 0 20px #FF0000, 0 0 10px #0000FF;
  text-shadow: 0 0 40px #FF0000, 0 0 6px #0000FF;
  
`

function App() {

  const [form, setForm] = useState({
    searchTerm: ''
});

  const [game, setGame] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedGame, setSelectedGame] = useState([]); 
  
// function that fetches game based on the search term
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
      // the fetch code
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (result) {
        setGame(result);
      } else {
        alert("I have went over the limit")
      }
    } catch (error) {
      // error handling
      alert("I have went over the limit")
      console.error(error);
    }
    console.log(game)
  }

// Function to fetch reviews for a specific game
const getGameReviews = async (gameId) => {
  console.log("Fetching reviews for gameId:", gameId)
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
    console.log("Reviews:",result);
    // Access the reviews property
    if (result.reviews) {
      // set the reviews state
      setReviews(result.reviews);
    } else {
      alert("I have went over the limit")
    }
  
  } catch (error) {
    console.error(error);
  }
} 


  useEffect(() => {
    getGames("")
  }, []);



 

const handleChange = (e) => {
    setForm ({
        ...form,
        searchTerm: e.target.value
    })
}

// handles search form submission
const handleSubmit = (e) => {
    e.preventDefault();
    getGames(form.searchTerm);
    form.searchTerm= "";
}

// handles game selection and fetch reviews
const handleGameClick = async (game) => {
  setSelectedGame(game);
  try {
    const reviewResult = await getGameReviews(game.id);
    if (reviewResult) {
      setReviews(reviewResult);
    } else {
      alert("No reviews available for this game.")
    }
  } catch (error) {
    console.error(error);
    alert("Error fetching reviews.");
  }
}

  return (
    <div>
      <Container className="App">
        <div className="background-image">
        <div className="header-container">
        <img src={controllerImage} alt="Game Controller" className="controller-image" />
        <h1 className="header-1">Game Finder+</h1>
        <img src={controllerImage} alt="Game Controller" className="controller-image" />
        </div>
        <Form  handleSubmit={handleSubmit} handleChange={handleChange} form={form} />
        <VideogameDisplay game={game} handleGameClick={handleGameClick} />
        {selectedGame && <ReviewsDisplay reviews={reviews} />}
        </div>
        <Footer className="footer-container"/>
      </Container>
      
    </div>
  );
}

export default App;
