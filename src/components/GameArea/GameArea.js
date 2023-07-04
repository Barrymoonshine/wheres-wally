import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';
import { useState } from 'react';

const GameArea = () => {
  const [gameClickCounter, setGameClickCounter] = useState(0);

  const handleClick = () => {
    console.log('gameClickCounter', gameClickCounter);
    setGameClickCounter((prevState) => prevState + 1);
  };

  return (
    <div className='game-container' onClick={handleClick}>
      <img src={gameImage} className='game-image' alt='Where is Wally' />
    </div>
  );
};

export default GameArea;
