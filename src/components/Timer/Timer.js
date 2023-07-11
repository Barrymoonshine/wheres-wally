import './Timer.css';
import { useGame } from '../../context/GameContext';

const Timer = () => {
  const { time } = useGame();

  return (
    <div>
      <span id='minute'>{time.minutes}</span>:
      <span id='second'>{time.seconds}</span>
    </div>
  );
};

export default Timer;
