import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import StartGame from './components/StartGame/StartGame';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import WinnerForm from './components/WinnerForm/WinnerForm';
import useGameState from './hook/useGameState';

const App = () => {
  // Previous state and methods
  // const { isStartGameVisible, isLeaderBoardVisible, isWinnerFormVisible } =
  //   useGame();

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
