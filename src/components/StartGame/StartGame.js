import './StartGame.css';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';
import { useGame } from '../../context/GameContext';

const StartGame = () => {
  const { startGame } = useGame();

  return (
    <div className='start-game-modal'>
      <div className='modal-content'>
        <div className='modal-header'>Find all three characters to win</div>
        <ul>
          <li className='start-game-character-containers'>
            <img className='start-game-images' src={wallyImg} alt='Wally' />
            Wally
          </li>
          <li className='start-game-character-containers'>
            <img className='start-game-images' src={odlawImg} alt='Wally' />
            Odlaw
          </li>
          <li className='start-game-character-containers'>
            <img className='start-game-images' src={wilmaImg} alt='Wally' />
            Wilma
          </li>
        </ul>
        <button className='start-game-button' onClick={() => startGame()}>
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
