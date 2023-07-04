import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';

const GameArea = () => {
  const [mousePosition, setMousePosition] = useState({});
  const [charLocations, setCharLocations] = useState({
    wally: [804, 282],
    odlaw: [374, 604],
    wizard: [1272, 118],
  });
  const [isCharSelectionVisible, setCharSelectionVisible] = useState(false);

  const captureMousePosition = (e) => {
    console.log(
      `captureMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
    setMousePosition({
      horizontalPosition: e.clientX,
      verticalPosition: e.clientY,
    });
    toggleCharMenuVisibility();
  };

  const toggleCharMenuVisibility = () => {
    const newVisibility = isCharSelectionVisible ? false : true;
    setCharSelectionVisible(newVisibility);
  };

  const trackMousePosition = (e) => {
    console.log(
      `trackMousePosition x Horizontal: ${e.clientX} y Vertical: ${e.clientY}`
    );
  };

  const checkIfCharFound = (selectedChar) => {
    const currentLocation = [
      mousePosition.horizontalPosition,
      mousePosition.verticalPosition,
    ];
    console.log(' charLocations[selectedChar]', charLocations[selectedChar]);
    console.log('currentLocation', currentLocation);
    console.log(
      ' charLocations[selectedChar][0] === currentLocation[0] && charLocations[selectedChar][1] === currentLocation[1]',
      charLocations[selectedChar][0] === currentLocation[0] &&
        charLocations[selectedChar][1] === currentLocation[1]
    );

    charLocations[selectedChar][0] === currentLocation[0] &&
    charLocations[selectedChar][1] === currentLocation[1]
      ? alert('selectedChar found!')
      : alert('Character not found, try again!');
  };

  return (
    <div
      className='game-container'
      onMouseDown={captureMousePosition}
      onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {isCharSelectionVisible && (
        <CharSelectionMenu
          mousePosition={mousePosition}
          checkIfCharFound={checkIfCharFound}
        />
      )}
    </div>
  );
};

export default GameArea;
