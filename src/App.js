import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import { GameProvider } from './context/GameContext';
import { useGame } from './context/GameContext';

const App = () => {
  const { isStartGameVisible } = useGame();

  return (
    <>
      <GameProvider>
        <Header />
        {isStartGameVisible && <StartGame />}
        <GameArea />
      </GameProvider>
    </>
  );
};

export default App;
