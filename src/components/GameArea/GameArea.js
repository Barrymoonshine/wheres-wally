import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import { useState } from 'react';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';
import Target from '../Target/Target';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const [isCharSelectionVisible, setCharSelectionVisible] = useState(false);
  const [isTargetVisible, setTargetVisibility] = useState(false);

  const { updateMousePositions } = useGame();

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
          toggleCharMenuVisibility={toggleCharMenuVisibility}
        />
      )}
      {isTargetVisible && <Target />}
    </div>
  );
};

export default GameArea;
