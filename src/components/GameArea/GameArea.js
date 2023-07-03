import './GameArea.css';
import gameImage from '../../images/Wheres-Wally-Pic8.jpg';

const GameArea = () => {
  return (
    <div className='game-container'>
      <img src={gameImage} className='game-image' alt='Where is Wally' />
    </div>
  );
};

export default GameArea;
