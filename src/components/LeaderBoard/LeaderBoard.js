import './LeaderBoard.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';

const LeaderBoard = () => {
  const { leaderBoard } = useGameState();
  const { playAgain } = useGameDispatch();

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
