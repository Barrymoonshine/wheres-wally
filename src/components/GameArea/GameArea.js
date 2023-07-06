import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';
import Target from '../Target/Target';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const [isCharSelectionVisible, setCharSelectionVisible] = useState(false);
  const [isTargetVisible, setTargetVisibility] = useState(false);
  const [foundChars, setFoundChars] = useState({
    wally: false,
    odlaw: false,
    wilma: false,
  });

  const { absolutePosition, updateMousePositions, characterLocations } =
    useGame();

  const toggleCharMenuVisibility = () => {
    const newVisibility = isCharSelectionVisible ? false : true;
    setCharSelectionVisible(newVisibility);
    setTargetVisibility(newVisibility);
  };

  // const trackMousePosition = (e) => {
  //   console.log(
  //     `trackMousePosition x pages Horizontal: ${e.pageX} y Vertical: ${e.pageY}`
  //   );
  // };

  const isLocationAllowed = (selectedChar) => {
    // Investigate refactoring for loop
    const allowedLocations = [];
    for (let i = -15; i < 16; i += 1) {
      for (let y = -15; y < 16; y += 1) {
        const newArray = [];
        newArray.push(characterLocations[selectedChar][0] + i);
        newArray.push(characterLocations[selectedChar][1] + y);
        allowedLocations.push(newArray);
      }
    }
    const locationAllowed = allowedLocations.some(
      (setOfCords) =>
        setOfCords[0] === absolutePosition[0] &&
        setOfCords[1] === absolutePosition[1]
    );
    return locationAllowed;
  };

  const checkIfCharFound = (selectedChar) => {
    if (isLocationAllowed(selectedChar)) {
      alert(`Congrats you found ${selectedChar}!`);
      setFoundChars((prevState) => ({ ...prevState, [selectedChar]: true }));
    } else {
      alert('Character not found, try again!');
    }
  };

  return (
    <div
      className='game-container'
      onMouseDown={(e) => {
        updateMousePositions(e);
        toggleCharMenuVisibility();
      }}

      // onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {isCharSelectionVisible && (
        <CharSelectionMenu
          toggleCharMenuVisibility={checkIfCharFound}
          checkIfCharFound={checkIfCharFound}
          foundChars={foundChars}
        />
      )}
      {isTargetVisible && <Target />}
    </div>
  );
};

export default GameArea;
