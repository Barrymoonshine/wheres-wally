import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const useGameState = () => {
  const { state } = useContext(GameContext);

  return {
    absolutePosition: state.absolutePosition,
    relativePosition: state.relativePosition,
    foundCharacters: state.foundCharacters,
    isTargetMenuVisible: state.isTargetMenuVisible,
    seconds: state.seconds,
    isStartGameVisible: state.isStartGameVisible,
    nameInput: state.nameInput,
    isWinnerFormVisible: state.isWinnerFormVisible,
    isLeaderBoardVisible: state.isLeaderBoardVisible,
    leaderBoard: state.leaderBoard,
  };
};

export default useGameState;
