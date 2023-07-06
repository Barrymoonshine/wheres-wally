import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';
import Target from '../Target/Target';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const [charMenuPosition, setCharMenuPosition] = useState({});
  const [charLocations, setCharLocations] = useState({
    wally: [1544, 118],
    odlaw: [96, 906],
    wilma: [1698, 356],
  });
  const [isCharSelectionVisible, setCharSelectionVisible] = useState(false);
  const [isTargetVisible, setTargetVisibility] = useState(false);
  const [foundChars, setFoundChars] = useState({
    wally: false,
    odlaw: false,
    wilma: false,
  });

  const { absolutePosition } = useGame();

  const captureMousePosition = (e) => {
    console.log(
      `captureMousePosition page x Horizontal: ${e.pageX} y Vertical: ${e.pageY}`
    );

    setCharMenuPosition({
      horizontalPosition: e.clientX,
      verticalPosition: e.clientY,
    });

    toggleCharMenuVisibility();
  };

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
    console.log('absolutePosition', absolutePosition);
    const areCordsPermitted = permittedCords.some(
      (setOfCords) =>
        setOfCords[0] === absolutePosition[0] &&
        setOfCords[1] === absolutePosition[1]
    );

    return areCordsPermitted;
  };

  const checkIfCharFound = (selectedChar) => {
    if (areCordsAllowed(selectedChar)) {
      alert(`Congrats you found ${selectedChar}!`);
      console.log();
      setFoundChars((prevState) => ({ ...prevState, [selectedChar]: true }));
    } else {
      alert('Character not found, try again!');
    }
  };

  return (
    <div
      className='game-container'
      onMouseDown={captureMousePosition}
      // onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {isCharSelectionVisible && (
        <CharSelectionMenu
          charMenuPosition={charMenuPosition}
          checkIfCharFound={checkIfCharFound}
          foundChars={foundChars}
        />
      )}
      {isTargetVisible && <Target charMenuPosition={charMenuPosition} />}
    </div>
  );
};

export default GameArea;
