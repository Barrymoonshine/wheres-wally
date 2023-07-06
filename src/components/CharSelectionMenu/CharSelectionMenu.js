import './CharSelectionMenu.css';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

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
      }}
    >
      <ul>
        <li>
          {foundChars.wally ? (
            'Wally has been found'
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
                  checkIfCharFound('wally');
                }}
              >
                <img className='menu-images' src={wallyImg} alt='Wally' />
              </button>
              Wally
            </div>
          )}
        </li>
        <li>
          {foundChars.odlaw ? (
            'Odlaw has been found'
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
                  checkIfCharFound('odlaw');
                }}
              >
                <img className='menu-images' src={odlawImg} alt='Odlaw' />
              </button>
              Odlaw
            </div>
          )}
        </li>
        <li>
          {foundChars.wilma ? (
            'Wilma has been found'
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
                  checkIfCharFound('wilma');
                }}
              >
                <img className='menu-images' src={wilmaImg} alt='Wilma' />
              </button>
              Wilma
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CharSelectionMenu;
