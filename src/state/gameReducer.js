import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  isStartGameVisible: true,
  seconds: 0,
  isTargetMenuVisible: false,
  absolutePosition: [],
  relativePosition: [],
  foundCharacters: { wally: false, odlaw: false, wilma: false },
  isWinnerFormVisible: false,
  isLeaderBoardVisible: false,
  nameInput: '',
  leaderBoard: [],
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
        isTargetMenuVisible: !state.isTargetMenuVisible,
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
        isWinnerFormVisible: !state.isWinnerFormVisible,
      };
    case ACTIONS.TOGGLE_LEADER_BOARD_VISIBILITY:
      return {
        ...state,
        isLeaderBoardVisible: !state.isLeaderBoardVisible,
      };
    case ACTIONS.SET_LEADER_BOARD:
      return {
        ...state,
        leaderBoard: payload.leaderBoardArray,
      };
    case ACTIONS.RESET_FOUND_CHARACTERS:
      return {
        ...state,
        foundCharacters: { wally: false, odlaw: false, wilma: false },
      };
    case ACTIONS.RESET_TIMER:
      return {
        ...state,
        seconds: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
