import './Timer.css';
import useGameState from '../../hooks/useGameState';

const Timer = () => {
  // Previous state and methods accessed
  // const { seconds, getSeconds, getMinutes } = useGame();

  const { seconds } = useGameState();

  //TBC
  // const calcSeconds = getSeconds(seconds);
  // const calcMinutes = getMinutes(seconds);

  return (
    <div className='timer'>
      {/* <span id='minute'>{calcMinutes}</span>:
      <span id='second'>{calcSeconds}</span> */}
    </div>
  );
};

export default Timer;
