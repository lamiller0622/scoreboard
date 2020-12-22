import React, { useContext } from 'react';
import Counter from './Counter';
import Icon from './Icon';
import {ScoreboardContext} from './Context';

const Player = ({index}) => {
    const { players, actions } = useContext(ScoreboardContext);
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
          <Icon isHighScore={actions.getHighScore() === players[index].score} />
          { players[index].name }
        </span>

        <Counter index={index} />
      </div>
    );
}

export default Player;