import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import {
  addToLeaderBoard,
  getLeaderBoard,
} from '../firebase/firestoreProvider';
import ACTIONS from '../utils/ACTIONS';
import { capitaliseFirstLetter } from '../utils/utilFunctions';
import { isLocationAllowed, areObjValuesTrue } from '../helpers/helpers';

// Declare intervalID in file scope for access in stopTimer and startGame
let intervalID;

const useGameDispatch = () => {
  const { state, dispatch } = useContext(GameContext);

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

  const checkIfCharFound = async (selectedChar) => {
    const locationAllowed = await isLocationAllowed(
      selectedChar,
      state.absolutePosition
    );
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
    dispatch({
      type: ACTIONS.TOGGLE_TARGET_MENU_VISIBILITY,
    });
  };

  const toggleWinnerForm = () => {
    dispatch({
      type: ACTIONS.TOGGLE_WINNER_FORM_VISIBILITY,
    });
  };

  const stopTimer = () => {
    clearInterval(intervalID);
  };

  const checkForEndGame = (updatedCharObject) => {
    const areAllCharsFound = areObjValuesTrue(updatedCharObject);
    if (areAllCharsFound) {
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

  const startGame = () => {
    dispatch({
      type: ACTIONS.START_GAME,
    });
    intervalID = setInterval(() => {
      incrementSeconds();
    }, 1000);
  };

  const playAgain = () => {
    dispatch({
      type: ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY,
    });
    dispatch({
      type: ACTIONS.RESET_FOUND_CHARACTERS,
    });
    startGame();
  };

  const handleInput = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_WINNER_NAME,
      payload: { e },
    });
  };

  const resetTimer = () => {
    dispatch({
      type: ACTIONS.RESET_TIMER,
    });
  };

  const toggleLeaderBoard = () => {
    dispatch({
      type: ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY,
    });
    resetTimer();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add data to Firestore
    addToLeaderBoard({
      name: state.nameInput,
      seconds: state.seconds,
    });
    // Get data inc. new player from fireStore
    const leaderBoardArray = await getLeaderBoard();
    // Add data to state
    dispatch({
      type: ACTIONS.SET_LEADER_BOARD,
      payload: { leaderBoardArray },
    });
    //hide winnerForm
    toggleWinnerForm();
    //show leaderBoard
    toggleLeaderBoard();
    // Reset input field
    dispatch({
      type: ACTIONS.RESET_NAME_INPUT,
    });
  };

  return {
    updateMousePositions,
    checkIfCharFound,
    toggleTargetMenuVisibility,
    startGame,
    playAgain,
    handleInput,
    handleSubmit,
  };
};

export default useGameDispatch;
