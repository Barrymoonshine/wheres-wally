import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { addToLeaderBoard, getLeaderBoard } from '../firebase/firebase';
import ACTIONS from '../utils/ACTIONS';
import { capitaliseFirstLetter } from '../utils/utilFunctions';
import { isLocationAllowed } from '../helpers/helpers';

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

  const stopTimer = () => {
    console.log('stop timer called');
    clearInterval(intervalID);
  };

  const checkForEndGame = (updatedCharObject) => {
    console.log('check for end game called');
    const areAllCharsFound = Object.keys(updatedCharObject)
      .map((key) => updatedCharObject[key])
      .reduce((acc, curr) => acc + curr, 0);

    if (areAllCharsFound === 3) {
      console.log('all chars found ');
      // Truthy equates to 1, if all chars found total is 3
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
    console.log('start game called');
    dispatch({
      type: ACTIONS.START_GAME,
    });
    intervalID = setInterval(() => {
      incrementSeconds();
    }, 1000);
  };

  const playAgain = async () => {
    const newVisibility = state.isLeaderBoardVisible ? false : true;
    const updatedCharObject = { wally: false, odlaw: false, wilma: false };

    dispatch({
      type: ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY,
      payload: { newVisibility },
    });
    dispatch({
      type: ACTIONS.UPDATE_FOUND_CHARACTER,
      payload: { updatedCharObject },
    });
    startGame();
  };

  const handleInput = (e) => {
    const newName = e.target.value;
    dispatch({
      type: ACTIONS.UPDATE_WINNER_NAME,
      payload: { newName },
    });
  };

  const resetTimer = () => {
    const newSeconds = 0;
    dispatch({
      type: ACTIONS.INCREMENT_SECONDS,
      payload: { newSeconds },
    });
  };

  const toggleLeaderBoard = () => {
    const newVisibility = state.isLeaderBoardVisible ? false : true;
    dispatch({
      type: ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY,
      payload: { newVisibility },
    });
    resetTimer();
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
    // Reset form
    const newName = '';
    dispatch({
      type: ACTIONS.UPDATE_WINNER_NAME,
      payload: { newName },
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
