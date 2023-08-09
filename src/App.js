import React from "react";
import Form from "./components/Form";
import VideogameDisplay from "./components/VideogameDisplay";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from "./components/Footer"
import "./App.css";

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: lightgreen;
  font-size: 14px;
  border-radius: 10px 10px 10px 10px;
  border: 5px solid red;
`

function App() {

  const [form, setForm] = useState({
    searchTerm: ''
});

  const [game, setGame] = useState(
    {
      "_id": "5d866f6993765d6778740b40",
      "magic": 5320,
      "isChosen": false,
      "title": null,
      "publishedDate": "2015-07-12T04:00:00.000Z",
      "externalUrl": "http://www.forbes.com/sites/games/2015/07/12/the-witcher-3-wild-hunt-review-into-the-great-wide-open/",
      "snippet": "All told, I give the game a Buy in my Buy/Hold/Sell ranking. For all its flaws—and I realize that I've listed many—it is one of the most sprawling, magnificent solo RPGs ever made. It does too little to fix its mechanical problems, and focuses too much on creating an open world, but the quality of its quest design, world-building, and wonderful (if too large) cast of characters makes it a game that no RPG fan should miss.\n\nIt may be a flawed masterpiece, but it's a masterpiece nonetheless.",
      "language": "en-us",
      "score": 90,
      "npScore": 100,
      "isQuoteManual": false,
      "Authors": [
        {
          "_id": "5d866f6993765d6778740b41",
          "id": 1158,
          "name": "Erik Kain",
          "image": true,
          "imageSrc": {
            "og": "critic/1158/o/hgV2ohtH.jpg",
            "sm": "critic/1158/eYp2RDH6.jpg",
            "lg": "critic/1158/OnhjUh6t.jpg"
          }
        }
      ],
      "ScoreFormat": {
        "id": 18,
        "name": "0 to 10 incl decimals",
        "shortName": "x.x / 10.0",
        "scoreDisplay": " / 10.0",
        "isNumeric": true,
        "isSelect": false,
        "isStars": false,
        "numDecimals": 1,
        "base": 10,
        "options": null
      },
      "Platforms": [
        {
          "_id": "5d866f6993765d6778740b42",
          "id": 27,
          "name": "PC",
          "shortName": "PC"
        }
      ],
      "alias": "Erik Kain",
      "game": {
        "id": 463,
        "name": "The Witcher 3: Wild Hunt"
      },
      "Outlet": {
        "name": "Forbes",
        "isContributor": false,
        "id": 290,
        "imageSrc": {
          "og": "outlet/290/o/wFV4sPVC.jpg",
          "sm": "outlet/290/wOGqziyy.jpg",
          "lg": "outlet/290/UeHhhlAS.jpg"
        }
      },
      "createdAt": "2019-09-21T18:43:53.518Z",
      "updatedAt": "2022-08-11T16:47:28.090Z",
      "__v": 0,
      "blend_magic": 5320
    }


  )

  const getGames = async (searchTerm) => {
    const url = `https://opencritic-api.p.rapidapi.com/reviews/game/463?skip=20`;
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
    } catch (error) {
      console.error(error);
    }
    // console.log(game)
  }


  // useEffect(() => {
  //   getGames({game})
  // }, [])


 

const handleChange = (e) => {
    console.log(e.target.value)
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
        <h1>Game Finder+</h1>
        <Form  handleSubmit={handleSubmit} handleChange={handleChange} form={form} />
        <VideogameDisplay game={game} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
