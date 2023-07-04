const CharSelectionMenu = (props) => {
  const { mousePosition } = props;
  return (
    <div
      className='char-selection-menu'
      style={{
        top: `${mousePosition.verticalPosition}px`,
        left: `${mousePosition.horizontalPosition}px`,
        position: 'fixed',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      <ul>
        <li>
          <button>Wally</button>
        </li>
        <li>
          <button>Odlaw</button>
        </li>
        <li>
          <button>Wizard</button>
        </li>
      </ul>
    </div>
  );
};

export default CharSelectionMenu;
