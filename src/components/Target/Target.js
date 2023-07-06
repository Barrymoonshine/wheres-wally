const Target = (props) => {
  const { charMenuPosition } = props;
  const leftTargetPos = charMenuPosition.horizontalPosition - 30;
  const topTargetPos = charMenuPosition.verticalPosition - 30;
  return (
    <div
      style={{
        left: `${leftTargetPos}px`,
        top: `${topTargetPos}px`,
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
