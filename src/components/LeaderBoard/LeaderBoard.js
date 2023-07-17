import './LeaderBoard.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';
import { getSeconds, getMinutes } from '../../helpers/helpers';

const LeaderBoard = () => {
  const { leaderBoard } = useGameState();
  const { playAgain } = useGameDispatch();

  return (
    <div className='leader-board-modal'>
      <div className='leader-board-modal-content'>
        <div className='modal-header'>Leader board</div>
        <div className='leader-board-first-row'>
          <div className='leader-board-columns'>Position</div>
          <div className='leader-board-columns'>Name</div>
          <div className='leader-board-columns'>Time</div>
        </div>
        {leaderBoard.map((player, index) => (
          <div className='leader-board-dynamic-rows' key={player.id}>
            <div className='leader-board-columns'>{index}</div>
            <div className='leader-board-columns'>{player.name}</div>
            <div className='leader-board-columns'>
              {getMinutes(player.seconds)}:{getSeconds(player.seconds)}
            </div>
          </div>
        ))}
        <button className='play-again-button' onClick={() => playAgain()}>
          Play again?
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
