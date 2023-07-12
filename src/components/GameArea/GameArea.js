import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import Target from '../Target/Target';
import CharacterMenu from '../CharacterMenu/CharacterMenu';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const {
    updateMousePositions,
    isTargetMenuVisible,
    toggleTargetMenuVisibility,
  } = useGame();

  return (
    <div
      className='game-container'
      onMouseDown={(e) => {
        updateMousePositions(e);
        toggleTargetMenuVisibility();
      }}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {isTargetMenuVisible && <Target />}
      {isTargetMenuVisible && <CharacterMenu />}
    </div>
  );
};

export default GameArea;
