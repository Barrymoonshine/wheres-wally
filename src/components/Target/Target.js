import { useGame } from '../../context/GameContext';

const Target = () => {
  const { relativePosition } = useGame();
  console.log(relativePosition);
  const leftTargetPosition = relativePosition[0] - 30;
  const topTargetPosition = relativePosition[1] - 30;
  return (
    <div
      style={{
        left: `${leftTargetPosition}px`,
        top: `${topTargetPosition}px`,
        position: 'fixed',
        border: '5px dotted red',
        width: '50px',
        height: '50px',
        borderRadius: '30px',
        color: 'red',
        fontSize: '20px',
        fontStyle: 'bolder',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(238, 238, 238, 0.6)',
      }}
    >
      X
    </div>
  );
};

export default Target;
