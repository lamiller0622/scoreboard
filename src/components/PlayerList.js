import React, {useContext} from 'react';
import Player from './Player';
import { ScoreboardContext } from './Context';

function PlayerList() {
  const { players } = useContext(ScoreboardContext)
  return (
    <React.Fragment>
      {players.map((player, index) =>
        <Player
          index={index}
          key={player.id.toString()}
        />
      )}
    </React.Fragment>
  )
};

export default PlayerList;