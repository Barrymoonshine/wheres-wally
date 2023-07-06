import './CharSelectionMenu.css';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';
import { useGame } from '../../context/GameContext';

const CharSelectionMenu = (props) => {
  const { charMenuPosition, checkIfCharFound, foundChars } = props;

  const { updateAbsolutePosition } = useGame();

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
            <div className='char-found-container'>
              <img className='menu-images' src={wallyImg} alt='Wally' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={(e) => {
                  updateAbsolutePosition(e);
                  checkIfCharFound('wally');
                }}
              >
                <img className='menu-images' src={wallyImg} alt='Wally' />
                Wally
              </button>
            </div>
          )}
        </li>
        <li>
          {foundChars.odlaw ? (
            <div className='char-found-container'>
              <img className='menu-images' src={odlawImg} alt='Odlaw' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={(e) => {
                  updateAbsolutePosition(e);
                  checkIfCharFound('odlaw');
                }}
              >
                <img className='menu-images' src={odlawImg} alt='Odlaw' />
                Odlaw
              </button>
            </div>
          )}
        </li>
        <li>
          {foundChars.wilma ? (
            <div className='char-found-container'>
              <img className='menu-images' src={wilmaImg} alt='Odlaw' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={(e) => {
                  updateAbsolutePosition(e);
                  checkIfCharFound('wilma');
                }}
              >
                <img className='menu-images' src={wilmaImg} alt='Wilma' />
                Wilma
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CharSelectionMenu;
