import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import WinnerForm from './components/WinnerForm/WinnerForm';
import { useGame } from './context/GameContext';

const App = () => {
  const { isStartGameVisible, isLeaderBoardVisible, isWinnerFormVisible } =
    useGame();

  return (
    <>
      {isStartGameVisible && <StartGame />}
      {isWinnerFormVisible && <WinnerForm />}
      {isLeaderBoardVisible && <LeaderBoard />}
      <Header />
      <GameArea />
    </>
  );
};

export default App;
