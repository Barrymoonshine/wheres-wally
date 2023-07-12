import './Timer.css';
import { useGame } from '../../context/GameContext';

const Timer = () => {
  const { seconds, getSeconds, getMinutes } = useGame();

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
