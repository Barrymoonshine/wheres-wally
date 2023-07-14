import './Timer.css';
import useGameState from '../../hooks/useGameState';
import { getSeconds, getMinutes } from '../../helpers/helpers';

const Timer = () => {
  const { seconds } = useGameState();

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
