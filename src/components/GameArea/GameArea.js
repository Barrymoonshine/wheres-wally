import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';

const GameArea = () => {
  const [mousePosition, setmousePosition] = useState({});
  const [charLocations, setCharLocations] = useState([
    { wally: [804, 282], odlaw: [374, 604], wizard: [1272, 118] },
  ]);
  const [isCharSelectionVisible, setCharSelectionVisible] = useState(false);

  const captureMousePosition = (e) => {
    console.log(
      `captureMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
    setmousePosition({
      horizontalPosition: e.clientX,
      verticalPosition: e.clientY,
    });
    toggleCharMenuVisibility();
  };

  const trackMousePosition = (e) => {
    console.log(
      `trackMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
  };

  const toggleCharMenuVisibility = () => {
    const newVisibility = isCharSelectionVisible ? false : true;
    setCharSelectionVisible(newVisibility);
  };

  return (
    <div
      className='game-container'
      onMouseDown={captureMousePosition}
      onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {isCharSelectionVisible && (
        <CharSelectionMenu mousePosition={mousePosition} />
      )}
    </div>
  );
};

export default GameArea;
