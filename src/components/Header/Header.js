import './Header.css';
import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const Header = () => {
  const { isLoading, foundCharacters, setFoundChars } = useGame();

  useEffect(() => {
    setFoundChars();
  }, []);

  console.log('foundCharacters Header', foundCharacters);

  console.log('isLoading Header', isLoading);

  return (
    <nav className='header-container'>
      {isLoading ? (
        'Page is loading...'
      ) : (
        <div>
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
                    foundCharacters[0].wallyFound
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
                    foundCharacters[1].odlawFound
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
                    foundCharacters[2].wilmaFound
                      ? { objectFit: 'cover', opacity: 0.4 }
                      : {}
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
