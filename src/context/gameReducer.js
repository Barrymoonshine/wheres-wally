import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  isStartGameVisible: true,
  seconds: 0,
  isTargetMenuVisible: false,
  absolutePosition: [],
  relativePosition: [],
  foundCharacters: { wally: false, odlaw: false, wilma: false },
  isWinnerFormVisible: false,
  isGameOver: false,
  isLeaderBoardVisible: false,
  nameInput: '',
};

const gameReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_ABSOLUTE_POSITION:
      return {
        ...state,
        absolutePosition: payload.newAbsolutePosition,
      };
    case ACTIONS.UPDATE_RELATIVE_POSITION:
      return {
        ...state,
        relativePosition: payload.newRelativePosition,
      };
    case ACTIONS.UPDATE_FOUND_CHARACTER:
      return {
        ...state,
        foundCharacters: payload.updatedCharObject,
      };
    case ACTIONS.TOGGLE_TARGET_MENU_VISIBILITY:
      return {
        ...state,
        isTargetMenuVisible: payload.newVisibility,
      };
    case ACTIONS.TOGGLE_GAME_OVER:
      return {
        ...state,
        isGameOver: payload.newGameOver,
      };
    case ACTIONS.INCREMENT_SECONDS:
      return {
        ...state,
        seconds: payload.newSeconds,
      };
    case ACTIONS.START_GAME:
      return {
        ...state,
        isStartGameVisible: false,
      };
    case ACTIONS.UPDATE_WINNER_NAME:
      return {
        ...state,
        nameInput: payload.newName,
      };
    case ACTIONS.TOGGLE_WINNER_FORM_VISIBILITY:
      return {
        ...state,
        isWinnerFormVisible: payload.newVisibility,
      };
    case ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY:
      return {
        ...state,
        isLeaderBoardVisible: payload.newVisibility,
      };
    default:
      return state;
  }
};

export default gameReducer;
