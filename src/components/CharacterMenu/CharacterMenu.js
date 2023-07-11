import './CharacterMenu.css';
import { useGame } from '../../context/GameContext';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const CharacterMenu = () => {
  const { relativePosition, foundCharacters, checkIfCharFound } = useGame();

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
          {foundCharacters[0].wallyFound ? (
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
          {foundCharacters[1].odlawFound ? (
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
          {foundCharacters[2].wilmaFound ? (
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
