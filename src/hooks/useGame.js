import { useReducer } from 'react';
import gameReducer, { initialState } from '../state/gameReducer';

const useGame = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useGame;
