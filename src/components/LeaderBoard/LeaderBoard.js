import './LeaderBoard.css';

const LeaderBoard = () => {
  return (
    <div className='leader-board-modal'>
      <div className='modal-content'>
        <div className='modal-header'>LeaderBoard</div>
        <ul>
          <li>Name - Time</li>
          <li>Name - Time</li>
          <li>Name - Time</li>
        </ul>
        <button className='start-game-button'>Start</button>
      </div>
    </div>
  );
};

export default LeaderBoard;
