import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';
import { useState } from 'react';

const GameArea = () => {
  const [mousePosition, setmousePosition] = useState({});
  const [charLocations, setCharLocations] = useState([
    { wally: [804, 282], odlaw: [374, 604], wizard: [1272, 118] },
  ]);

  const captureMousePosition = (e) => {
    console.log(
      `captureMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
    setmousePosition({
      horizontalPosition: e.clientX,
      verticalPosition: e.clientY,
    });
  };

  const trackMousePosition = (e) => {
    console.log(
      `trackMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
  };

  return (
    <div
      className='game-container'
      onMouseDown={captureMousePosition}
      onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
    </div>
  );
};

export default GameArea;
