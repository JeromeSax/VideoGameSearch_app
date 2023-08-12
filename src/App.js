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
  height: 100%;
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
  

  const getGames = async (searchTerm) => {
    // const url = `https://opencritic-api.p.rapidapi.com/game/search?criteria=${searchTerm}`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '9506c29c54mshdfecaae160925a7p15dc51jsn9863a6a8ce1e',
    //     'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   console.log(result);
    //   if (result) {
    //     // setGame(result);
    //   } else {
    //     alert("I have went over the limit")
    //   }
    // } catch (error) {
    //   alert("I have went over the limit")
    //   console.error(error);
    // }
    // console.log(game)
  }

// Function to fetch reviews for a specific game
const getGameReviews = async (gameId) => {
  // console.log(typeof gameId)
  // const url = `https://opencritic-api.p.rapidapi.com/reviews/game/${gameId}?skip=20`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     'X-RapidAPI-Key': '9506c29c54mshdfecaae160925a7p15dc51jsn9863a6a8ce1e',
  //     'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  //   }
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   console.log(result);
  //   if (result) {
  //     setReviews(result);
  //   } else {
  //     alert("I have went over the limit")
  //   }
  
  // } catch (error) {
  //   console.error(error);
  // }
} 


  // useEffect(() => {
  //   getGames()
  // }, []);



 

const handleChange = (e) => {
    // console.log(e.target.value)
    setForm ({
        ...form,
        searchTerm: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    getGames(form.searchTerm);
    form.searchTerm= "";
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
        <VideogameDisplay game={game}  />
        <ReviewsDisplay reviews={reviews} />
        </div>
        <Footer className="footer-container"/>
      </Container>
      
    </div>
  );
}

export default App;
