import './GameArea.css';
import gameImage from '../../images/game-board.jpg';
import CharacterMenu from '../CharacterMenu/CharacterMenu';
import Target from '../Target/Target';
import { useGame } from '../../context/GameContext';

const GameArea = () => {
  const { updateMousePositions, arePopUpsVisible, togglePopUpsVisibility } =
    useGame();

  return (
    <div
      className='game-container'
      onMouseDown={(e) => {
        updateMousePositions(e);
        togglePopUpsVisibility();
      }}
    >
      <img src={gameImage} className='game-image' alt='Where is Wally' />
      {arePopUpsVisible && <CharacterMenu />}
      {arePopUpsVisible && <Target />}
    </div>
  );
};

export default GameArea;
