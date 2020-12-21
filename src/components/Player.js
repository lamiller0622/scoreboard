import React, { PureComponent } from 'react';
import Counter from './Counter';
import Icon from './Icon';
import {Consumer} from './Context';

class Player extends PureComponent {
  
  render() {
    
    const { 
      index
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({actions, players}) => (
            <span className="player-name">
            <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
          
          <Icon isHighScore={actions.getHighScore() === players[index].score} />
            { players[index].name }
          </span>
          )}

        </Consumer>  
        <Counter 
          index={index}
        />
      </div>
    );
  }
}

export default Player;