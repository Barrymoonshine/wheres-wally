import './App.css';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import { GameProvider } from './context/GameContext';
import { runGetDocs } from './firebase/firebase';

const App = () => {
  runGetDocs();
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
