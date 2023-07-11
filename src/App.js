import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import { useGame } from './context/GameContext';

const App = () => {
  const { isStartGameVisible } = useGame();

  return (
    <>
      {isStartGameVisible && <StartGame />}
      <Header />
      <GameArea />
    </>
  );
};

export default App;
