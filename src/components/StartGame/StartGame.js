import './StartGame.css';
import useGameDispatch from '../../hooks/useGameDispatch';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const StartGame = () => {
  const { startGame } = useGameDispatch();

  return (
    <div className='start-game-modal'>
      <div className='start-game-modal-content'>
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
