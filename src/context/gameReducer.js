import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  absolutePosition: [],
  relativePosition: [],
  foundCharacters: { wally: false, odlaw: false, wilma: false },
  seconds: 0,
  isStartGameVisible: true,
  isTargetMenuVisible: false,
  isLeaderBoardVisible: false,
  gameOver: false,
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
    case ACTIONS.SET_GAME_OVER_TRUE:
      return {
        ...state,
        gameOver: true,
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
    default:
      return state;
  }
};

export default gameReducer;
