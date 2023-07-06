import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import CharSelectionMenu from '../CharSelectionMenu/CharSelectionMenu';
import Target from '../Target/Target';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const { updateMousePositions, arePopUpsVisible, togglePopUpsVisibility } =
    useGame();

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
        togglePopUpsVisibility();
      }}
      // onMouseMove={trackMousePosition}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {arePopUpsVisible && <CharSelectionMenu />}
      {arePopUpsVisible && <Target />}
    </div>
  );
};

export default GameArea;
