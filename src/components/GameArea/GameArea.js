import './GameArea.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';
import gameImage from '../../images/game-board.jpg';
import Target from '../Target/Target';
import CharacterMenu from '../CharacterMenu/CharacterMenu';

const GameArea = () => {
  const { isTargetMenuVisible } = useGameState();
  const { updateMousePositions, toggleTargetMenuVisibility } =
    useGameDispatch();

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
