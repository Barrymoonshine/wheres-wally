import useGameState from '../../hooks/useGameState';

const Target = () => {
  const { relativePosition } = useGameState();

  return (
    <div
      style={{
        left: `${relativePosition[0] - 30}px`,
        top: `${relativePosition[1] - 30}px`,
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
