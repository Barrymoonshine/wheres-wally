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
      // Update character in state, and FireStore
      alert(`Congrats you found ${selectedChar}!`);
      const updatedCharObject = {
        ...state.foundCharacters,
        [selectedChar]: true,
      };
      dispatch({
        type: ACTIONS.UPDATE_FOUND_CHARACTER,
        payload: { updatedCharObject },
      });
      checkForEndGame(updatedCharObject);
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

  const checkForEndGame = (updatedCharObject) => {
    console.log('checkForEndGame called', checkForEndGame);
    const areAllCharsFound = Object.keys(updatedCharObject)
      .map((key) => updatedCharObject[key])
      .reduce((acc, curr) => acc + curr, 0);
    console.log('areAllCharsFound', areAllCharsFound);
    // Truthy equates to 1, if all truthy total is 3
    areAllCharsFound === 3 &&
      dispatch({
        type: ACTIONS.SET_GAME_OVER_TRUE,
      });
  };

  const incrementTime = () => {
    if (state.time.seconds === 60) {
      const newTime = {
        minutes: (state.time.minutes += 1),
        seconds: 0,
      };
      dispatch({
        type: ACTIONS.INCREMENT_TIME,
        payload: { newTime },
      });
    } else {
      const newSeconds = (state.time.seconds += 1);
      console.log('newSeconds', newSeconds);
      const newTime = {
        minutes: state.time.minutes,
        seconds: (state.time.seconds += 1),
      };

      dispatch({
        type: ACTIONS.INCREMENT_TIME,
        payload: { newTime },
      });
    }
  };

  const startGame = () => {
    dispatch({
      type: ACTIONS.START_GAME,
    });
  };

  const value = {
    absolutePosition: state.absolutePosition,
    relativePosition: state.relativePosition,
    foundCharacters: state.foundCharacters,
    arePopUpsVisible: state.arePopUpsVisible,
    isLoading: state.isLoading,
    time: state.time,
    updateMousePositions,
    checkIfCharFound,
    togglePopUpsVisibility,
    incrementTime,
    startGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
