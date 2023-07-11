import './Header.css';
import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import wallyImg from '../../images/wally.png';
import odlawImg from '../../images/odlaw.png';
import wilmaImg from '../../images/wilma.png';

const Header = () => {
  const { isLoading, foundCharacters, setFoundChars } = useGame();

  useEffect(() => {
    // Run setFoundChars on page load to grab data from FS and update isLoading
    setFoundChars();
  }, []);

  return (
    <div className='header-container'>
      {isLoading ? (
        'Page is loading...'
      ) : (
        <nav className='nav-container'>
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
                    foundCharacters[0].found
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
                    foundCharacters[1].found
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
                    foundCharacters[2].found
                      ? { objectFit: 'cover', opacity: 0.4 }
                      : {}
                  }
                />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
