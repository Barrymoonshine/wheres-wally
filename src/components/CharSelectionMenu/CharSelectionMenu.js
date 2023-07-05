const CharSelectionMenu = (props) => {
  const { charMenuPosition, checkIfCharFound } = props;
  return (
    <div
      className='char-selection-menu'
      style={{
        left: `${charMenuPosition.horizontalPosition}px`,
        top: `${charMenuPosition.verticalPosition}px`,
        position: 'fixed',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      <ul>
        <li>
          <button
            onMouseDown={() => {
              checkIfCharFound('wally');
            }}
          >
            Wally
          </button>
        </li>
        <li>
          <button
            onMouseDown={() => {
              checkIfCharFound('odlaw');
            }}
          >
            Odlaw
          </button>
        </li>
        <li>
          <button
            onMouseDown={() => {
              checkIfCharFound('wilma');
            }}
          >
            Wilma
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CharSelectionMenu;
