import ACTIONS from '../utils/ACTIONS';
import { createContext, useReducer, useContext } from 'react';
import gameReducer, { initialState } from './gameReducer';
import { getCharLocations } from '../firebase/firebase';
import { formatTime } from '../utils/formatTime';

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

  const incrementSeconds = () => {
    const newSeconds = (state.seconds += 1);
    dispatch({
      type: ACTIONS.INCREMENT_SECONDS,
      payload: { newSeconds },
    });
  };

  const getMinutes = (seconds) => formatTime(Math.floor(seconds / 60));

  const getSeconds = (seconds) => formatTime(seconds % 60);

  const startGame = () => {
    console.log('start game called');
    dispatch({
      type: ACTIONS.START_GAME,
    });
    setInterval(() => {
      incrementSeconds();
    }, 1000);
  };

  const value = {
    absolutePosition: state.absolutePosition,
    relativePosition: state.relativePosition,
    foundCharacters: state.foundCharacters,
    arePopUpsVisible: state.arePopUpsVisible,
    isLoading: state.isLoading,
    seconds: state.seconds,
    isStartGameVisible: state.isStartGameVisible,
    updateMousePositions,
    checkIfCharFound,
    togglePopUpsVisibility,
    startGame,
    getMinutes,
    getSeconds,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
