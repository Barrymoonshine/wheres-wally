import { createContext } from 'react';
import useGame from '../hooks/useGame';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  return (
    <GameContext.Provider value={useGame()}>{children}</GameContext.Provider>
  );
};
