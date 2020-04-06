import React, { useState, useEffect } from "react";
import GameService from './api/game';

const Admin = () => {
  const gameService = GameService();
  const [config, setConfig] = useState({});
  const [status, setStatus] = useState("");
  const [spyStatus, setSpyStatus] = useState("não foi setado");
  const [resistanceStatus, setResistanceStatus] = useState("nao foi setado");

  useEffect(() => {
    getCardStatus();
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setConfig({...config, [name]: Number(value)});
};

const handleSubmit = (e) => {
  e.preventDefault();
  gameService.setGame(config)
    .then(response => {
      setStatus(response.status);
    }).catch(error => {
      console.log(error);
    });
};

const getCardStatus = () => {
  gameService.getStatus()
  .then(response => {
    setSpyStatus(response.spy.count);
    setResistanceStatus(response.resistance.count);
  })
  .catch(error => {
    setSpyStatus("deu erro");
    setResistanceStatus("deu erro");
  });
};

  return (
    <div>
      <h2>Admin</h2>
      <form  onSubmit={handleSubmit}>
        <label>Espiões:</label>
        <input type='number' name='spyCount' onChange={handleChange} required/>
        <label>Resistencia:</label>
        <input type='number' name='resistanceCount' onChange={handleChange} required/>
        <input type='submit'/>
      </form>
      <h2>{status}</h2>
    <h3>Espiões: {spyStatus}</h3>
    <h3>Resistencia: {resistanceStatus}</h3>
  </div>
  );
};

export default Admin;
