import ACTIONS from '../utils/ACTIONS';
import { createContext, useReducer, useContext } from 'react';
import gameReducer, { initialState } from './gameReducer';
import { getCharLocations } from '../firebase/firebase';

const GameContext = createContext(initialState);
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const updateMousePositions = (e) => {
    const newAbsolutePosition = [e.pageX, e.pageY];
    const newRelativePosition = [e.clientX, e.clientY];
    dispatch({
      type: ACTIONS.UPDATE_ABSOLUTE_POSITION,
      payload: { newAbsolutePosition },
    });
    dispatch({
      type: ACTIONS.UPDATE_RELATIVE_POSITION,
      payload: { newRelativePosition },
    });
  };

  const isLocationAllowed = async (selectedChar) => {
    const characterLocations = await getCharLocations();

    console.log('charLocations()', characterLocations);
    // Investigate refactoring for loop
    const allowedLocations = [];

    for (let i = -15; i < 16; i += 1) {
      for (let y = -15; y < 16; y += 1) {
        const newArray = [];
        newArray.push(characterLocations[selectedChar][0] + i);
        newArray.push(characterLocations[selectedChar][1] + y);
        allowedLocations.push(newArray);
      }
    }

    const locationAllowed = allowedLocations.some(
      (setOfCords) =>
        setOfCords[0] === state.absolutePosition[0] &&
        setOfCords[1] === state.absolutePosition[1]
    );

    return locationAllowed;
  };

  const checkIfCharFound = async (selectedChar) => {
    const locationAllowed = await isLocationAllowed(selectedChar);
    if (locationAllowed) {
      alert(`Congrats you found ${selectedChar}!`);
      const updatedChar = { ...state.foundCharacters, [selectedChar]: true };
      dispatch({
        type: ACTIONS.UPDATE_FOUND_CHARACTER,
        payload: { updatedChar },
      });
    } else {
      alert('Character not found, try again!');
    }
  };

  const togglePopUpsVisibility = () => {
    const newVisibility = state.arePopUpsVisible ? false : true;
    dispatch({
      type: ACTIONS.TOGGLE_VISIBILITY,
      payload: { newVisibility },
    });
  };

  const value = {
    absolutePosition: state.absolutePosition,
    relativePosition: state.relativePosition,
    foundCharacters: state.foundCharacters,
    arePopUpsVisible: state.arePopUpsVisible,
    updateMousePositions,
    checkIfCharFound,
    togglePopUpsVisibility,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
