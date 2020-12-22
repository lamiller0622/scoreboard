import React, { useState } from 'react';

export const ScoreboardContext = React.createContext();
let id = 0;

export const Provider = (props) => {
  const [ players, setPlayers ] = useState([{
    name: "Luke",
    score: 0,
    id: 1
  },
  {
    name: "Treasure",
    score: 0,
    id: 2
  },
  {
    name: "Ashley",
    score: 0,
    id: 3
  },
  {
    name: "James",
    score: 0,
    id: 4
  }]);

  // player id counter
  const prevPlayerId = 4;

  const handleScoreChange = (index, delta) => {
    setPlayers(prevState => {
      const updatedPlayers = [ ...prevState ];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  };


  const getHighScore = () => {
    const scores = players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  const handleAddPlayer = (name) =>  {
    setPlayers(prevState => {
      return [
        ...prevState, 
        {
          name,
          score: 0,
          id: id += 1
        }
      ]
    });    
  };

  const handleRemovePlayer = (id) => { 
    setPlayers( prevState => prevState.filter(p => p.id !== id) );
  };

  return (
    <ScoreboardContext.Provider value={{
      players,
      actions: {
        changeScore: handleScoreChange,
        removePlayer: handleRemovePlayer,
        getHighScore: getHighScore,
        addPlayer: handleAddPlayer
      }
    }}>
      {props.children}
    </ScoreboardContext.Provider>
  );
}
export const Consumer = ScoreboardContext.Consumer;

