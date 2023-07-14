import './LeaderBoard.css';
import useGameState from '../../hooks/GameContext';

const LeaderBoard = () => {
  // Previous state and method accessed
  // const { playAgain, leaderBoard } = useGame();

  const { leaderBoard } = useGameState();

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
        <button
          className='play-again-button'
          // onClick={() => playAgain()}
        >
          Play again?
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
