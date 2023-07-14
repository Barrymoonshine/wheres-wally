import './Header.css';
import useGameState from '../../hooks/useGameState';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';
import Timer from '../Timer/Timer';

const Header = () => {
  const { foundCharacters } = useGameState();

  return (
    <div className='header-container'>
      <nav className='nav-container'>
        <div className='title'>Where's Wally</div>
        <div className='timer'>
          <Timer />
        </div>
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
    </div>
  );
};

export default Header;
