import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import { useGame } from './context/GameContext';

const App = () => {
  const { isStartGameVisible, isLeaderBoardVisible } = useGame();

  return (
    <>
      {isStartGameVisible && <StartGame />}
      {isLeaderBoardVisible && <LeaderBoard />}
      <Header />
      <GameArea />
    </>
  );
};

export default App;
