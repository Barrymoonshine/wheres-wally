import './App.css';
import useGameState from './hooks/useGameState';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import WinnerForm from './components/WinnerForm/WinnerForm';

const App = () => {
  const { isStartGameVisible, isLeaderBoardVisible, isWinnerFormVisible } =
    useGameState();

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
