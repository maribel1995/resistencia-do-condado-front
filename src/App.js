import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin.js";

function App() {
  const [game, setGame] = useState({});
  const [isDisabled, setIsDisabled] = useState(false)
  const getCard = () => {
    axios
      .get("http://localhost:8000/api/game")
      .then(function(response) {
        setGame(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      setIsDisabled(true)
  };

  return (
    <Switch>
      <Route path="/mari">
        <Admin />
      </Route>
      <Route path="/">
        <button disabled={isDisabled} onClick={getCard}>Descubra quem você é</button>
        <h1>Voce é um {game.youAre}</h1>
      </Route>
    </Switch>
  );
}

export default App;
