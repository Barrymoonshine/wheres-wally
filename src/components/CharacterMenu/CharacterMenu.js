import './CharacterMenu.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const CharacterMenu = () => {
  const { relativePosition, foundCharacters } = useGameState();
  const { checkIfCharFound } = useGameDispatch();

  return (
    <div
      className='char-selection-menu'
      style={{
        left: `${relativePosition[0] + 20}px`,
        top: `${relativePosition[1] + 20}px`,
        position: 'fixed',
      }}
    >
      <ul>
        <li>
          {foundCharacters.wally ? (
            <div className='char-found-container'>
              <img className='menu-images' src={wallyImg} alt='Wally' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
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
          {foundCharacters.odlaw ? (
            <div className='char-found-container'>
              <img className='menu-images' src={odlawImg} alt='Odlaw' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
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
          {foundCharacters.wilma ? (
            <div className='char-found-container'>
              <img className='menu-images' src={wilmaImg} alt='Odlaw' />
              Found!
            </div>
          ) : (
            <div className='menu-button-container'>
              <button
                className='menu-button'
                onMouseDown={() => {
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

export default CharacterMenu;
