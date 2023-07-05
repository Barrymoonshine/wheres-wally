import './Header.css';

const Header = () => {
  return (
    <nav className='header-container'>
      <div className='title'>Where's Wally</div>
      <div className='timer'>Insert timer here</div>
      <div className='characters'>
        <ul>
          <li>Wally</li>
          <li>Odlaw</li>
          <li>Wilma</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
