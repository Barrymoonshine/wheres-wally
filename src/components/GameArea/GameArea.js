import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';

const GameArea = () => {
  const [mousePosition, setMousePosition] = useState({});
  const [charLocations, setCharLocations] = useState({
    wally: [804, 282],
    odlaw: [374, 604],
    wizard: [1322, 120],
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

  const areCordsAllowed = (selectedChar) => {
    // Investigate refactoring for loop
    const permittedCords = [];
    for (let i = -15; i < 16; i += 1) {
      // Create an array of arrays that contains all permitted co-ordinates within a -5: +5 range
      for (let y = -15; y < 16; y += 1) {
        const newArray = [];
        newArray.push(charLocations[selectedChar][0] + i);
        newArray.push(charLocations[selectedChar][1] + y);
        permittedCords.push(newArray);
      }
    }

    const areCordsPermitted = permittedCords.some(
      (setOfCords) =>
        setOfCords[0] === mousePosition.horizontalPosition &&
        setOfCords[1] === mousePosition.verticalPosition
    );

    return areCordsPermitted;
  };

  const checkIfCharFound = (selectedChar) => {
    console.log('checkIfCharFound called');
    console.log('selectedChar', selectedChar);
    areCordsAllowed(selectedChar)
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
