import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import { GameProvider } from './context/GameContext';

const App = () => {
  return (
    <>
      <GameProvider>
        <Header />
        <GameArea />
      </GameProvider>
    </>
  );
};

export default App;
