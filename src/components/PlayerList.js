import React from 'react';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = () => {
  return (
    <Consumer>
      { ({players}) => (
        <React.Fragment>
          {players.map((player, index) =>
            <Player
              index={index}
              key={player.id.toString()}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default PlayerList;