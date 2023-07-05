const CharSelectionMenu = (props) => {
  const { charMenuPosition, checkIfCharFound, foundChars } = props;

  const leftMenuPos = charMenuPosition.horizontalPosition + 20;
  const topMenuPos = charMenuPosition.verticalPosition + 20;

  return (
    <div
      className='char-selection-menu'
      style={{
        left: `${leftMenuPos}px`,
        top: `${topMenuPos}px`,
        position: 'fixed',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      <ul>
        <li>
          {`Wally found: ${foundChars.wally}`}
          {foundChars.wally ? (
            'Wally has been found'
          ) : (
            <button
              onMouseDown={() => {
                checkIfCharFound('wally');
              }}
            >
              Wally
            </button>
          )}
        </li>
        <li>
          {`Odlaw found: ${foundChars.odlaw}`}
          {foundChars.odlaw ? (
            'Odlaw has been found'
          ) : (
            <button
              onMouseDown={() => {
                checkIfCharFound('odlaw');
              }}
            >
              Odlaw
            </button>
          )}
        </li>
        <li>
          {`Wilma found: ${foundChars.wilma}`}
          {foundChars.wilma ? (
            'Wilma has been found'
          ) : (
            <button
              onMouseDown={() => {
                checkIfCharFound('wilma');
              }}
            >
              Wilma
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CharSelectionMenu;
