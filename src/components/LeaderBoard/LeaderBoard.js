import './LeaderBoard.css';
import { useGame } from '../../context/GameContext';

const LeaderBoard = () => {
  const { playAgain } = useGame();
  return (
    <div className='leader-board-modal'>
      <div className='modal-content'>
        <div className='modal-header'>Leader board</div>
        Congrats you found all the characters!
        <ul>
          <li>Name - Time</li>
          <li>Name - Time</li>
          <li>Name - Time</li>
        </ul>
        <button className='play-again-button' onClick={() => playAgain()}>
          Play again?
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
