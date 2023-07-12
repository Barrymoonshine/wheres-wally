import ACTIONS from '../utils/ACTIONS';
import { createContext, useReducer, useContext } from 'react';
import gameReducer, { initialState } from './gameReducer';
import {
  getCharLocations,
  addToLeaderBoard,
  getLeaderBoard,
} from '../firebase/firebase';
import { formatTime, capitaliseFirstLetter } from '../utils/utilFunctions';

const GameContext = createContext(initialState);
export const useGame = () => useContext(GameContext);

// Declare intervalID in function wide scope for access in stopTimer
let intervalID;

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
      alert(`Congrats you found ${capitaliseFirstLetter(selectedChar)}!`);
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

  const toggleTargetMenuVisibility = () => {
    const newVisibility = state.isTargetMenuVisible ? false : true;
    dispatch({
      type: ACTIONS.TOGGLE_TARGET_MENU_VISIBILITY,
      payload: { newVisibility },
    });
  };

  const toggleWinnerForm = () => {
    const newVisibility = state.isWinnerFormVisible ? false : true;
    dispatch({
      type: ACTIONS.TOGGLE_WINNER_FORM_VISIBILITY,
      payload: { newVisibility },
    });
  };

  const checkForEndGame = (updatedCharObject) => {
    console.log('check for end game called');
    const areAllCharsFound = Object.keys(updatedCharObject)
      .map((key) => updatedCharObject[key])
      .reduce((acc, curr) => acc + curr, 0);

    if (areAllCharsFound === 3) {
      console.log('all chars found ');
      // Truthy equates to 1, if all chars found = truthy, total is 3
      toggleWinnerForm();
      stopTimer();
    }
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
    intervalID = setInterval(() => {
      incrementSeconds();
    }, 1000);
  };

  const playAgain = () => {
    const newGameOver = state.isGameOver ? false : true;
    const updatedCharObject = { wally: false, odlaw: false, wilma: false };
    dispatch({
      type: ACTIONS.TOGGLE_GAME_OVER,
      payload: { newGameOver },
    });
    dispatch({
      type: ACTIONS.UPDATE_FOUND_CHARACTER,
      payload: { updatedCharObject },
    });
  };

  const handleInput = (e) => {
    const newName = e.target.value;
    dispatch({
      type: ACTIONS.UPDATE_WINNER_NAME,
      payload: { newName },
    });
  };

  const toggleLeaderBoard = () => {
    const newVisibility = state.isLeaderBoardVisible ? false : true;
    dispatch({
      type: ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY,
      payload: { newVisibility },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('handleSubmit called');
    const newPlayer = {
      name: state.nameInput,
      seconds: state.seconds,
    };
    // Add data to Firestore
    addToLeaderBoard(newPlayer);

    // Get data inc. new player from fireStore
    const leaderBoardArray = await getLeaderBoard();

    // Add data to state
    dispatch({
      type: ACTIONS.SET_LEADER_BOARD,
      payload: { leaderBoardArray },
    });
    //hide winnerform
    toggleWinnerForm();
    //show leaderboard
    toggleLeaderBoard();
  };

  const stopTimer = () => {
    clearInterval(intervalID);
  };

  const value = {
    absolutePosition: state.absolutePosition,
    relativePosition: state.relativePosition,
    foundCharacters: state.foundCharacters,
    isTargetMenuVisible: state.isTargetMenuVisible,
    seconds: state.seconds,
    isStartGameVisible: state.isStartGameVisible,
    isGameOver: state.isGameOver,
    nameInput: state.nameInput,
    isWinnerFormVisible: state.isWinnerFormVisible,
    isLeaderBoardVisible: state.isLeaderBoardVisible,
    leaderBoard: state.leaderBoard,
    updateMousePositions,
    checkIfCharFound,
    toggleTargetMenuVisibility,
    startGame,
    getMinutes,
    getSeconds,
    playAgain,
    handleInput,
    handleSubmit,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
