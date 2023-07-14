import './Timer.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';

const Timer = () => {
  const { seconds } = useGameState();
  const { getSeconds, getMinutes } = useGameDispatch();

  const calcSeconds = getSeconds(seconds);
  const calcMinutes = getMinutes(seconds);

  return (
    <div className='timer'>
      <span id='minute'>{calcMinutes}</span>:
      <span id='second'>{calcSeconds}</span>
    </div>
  );
};

export default Timer;
