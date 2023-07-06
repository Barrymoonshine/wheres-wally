import './Header.css';
import { useGame } from '../../context/GameContext';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const Header = () => {
  const { foundCharacters } = useGame();
  return (
    <nav className='header-container'>
      <div className='title'>Where's Wally</div>
      <div className='timer'>Insert timer here</div>
      <div className='characters'>
        <ul>
          <li>
            <img
              className='header-images'
              src={wallyImg}
              alt='Wally'
              style={
                foundCharacters.wally
                  ? { objectFit: 'cover', opacity: 0.4 }
                  : {}
              }
            />
          </li>
          <li>
            <img
              className='header-images'
              src={odlawImg}
              alt='Odlaw'
              style={
                foundCharacters.odlaw
                  ? { objectFit: 'cover', opacity: 0.4 }
                  : {}
              }
            />
          </li>
          <li>
            <img
              className='header-images'
              src={wilmaImg}
              alt='Wilma'
              style={
                foundCharacters.wilma
                  ? { objectFit: 'cover', opacity: 0.4 }
                  : {}
              }
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
