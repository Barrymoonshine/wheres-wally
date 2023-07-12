import './Timer.css';
import { useGame } from '../../context/GameContext';

const Timer = () => {
  const { seconds, getMinutes } = useGame();

  const minutes = getMinutes(seconds);

  return (
    <div>
      <span id='minute'>{minutes}</span>:<span id='second'>{seconds}</span>
    </div>
  );
};

export default Timer;
