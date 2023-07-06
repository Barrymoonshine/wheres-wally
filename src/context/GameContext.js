import ACTIONS from '../utils/ACTIONS';
import { createContext, useReducer, useContext } from 'react';
import gameReducer, { initialState } from './gameReducer';

const GameContext = createContext(initialState);
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const updateAbsolutePosition = (e) => {
    const newPositions = [e.pageX, e.pageY];
    console.log('newPositions', newPositions);
    dispatch({
      type: ACTIONS.UPDATE_ABSOLUTE_POSITION,
      payload: { newPositions },
    });
  };

  const value = {
    absolutePosition: state.absolutePosition,
    updateAbsolutePosition,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
