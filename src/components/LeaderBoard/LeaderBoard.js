import './LeaderBoard.css';
import { useGame } from '../../context/GameContext';

const LeaderBoard = () => {
  const { playAgain, leaderBoard } = useGame();

  console.log('leaderBoard', leaderBoard);

  return (
    <div className='leader-board-modal'>
      <div className='leader-board-modal-content'>
        <div className='modal-header'>Leader board</div>
        Dynamically populate list with top ten from Firebase
        <ul>
          {leaderBoard.map((player) => (
            <li key={player.id}>
              Name: {player.name} Time : {player.seconds}
            </li>
          ))}
        </ul>
        <button className='play-again-button' onClick={() => playAgain()}>
          Play again?
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
