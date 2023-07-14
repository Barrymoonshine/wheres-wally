import './CharacterMenu.css';
import { useGameState } from '../../hooks/useGameState';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const CharacterMenu = () => {
  // Previous state and methods accessed with the useGame() hook
  // const { relativePosition, foundCharacters, checkIfCharFound } = useGame();

  const { relativePosition, foundCharacters } = useGameState();

  const leftMenuPosition = relativePosition[0] + 20;
  const topMenuPosition = relativePosition[1] + 20;

  return (
    <div
      className='char-selection-menu'
      style={{
        left: `${leftMenuPosition}px`,
        top: `${topMenuPosition}px`,
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
                // onMouseDown={() => {
                //   checkIfCharFound('wally');
                // }}
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
                // onMouseDown={() => {
                //   checkIfCharFound('odlaw');
                // }}
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
                // onMouseDown={() => {
                //   checkIfCharFound('wilma');
                // }}
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
