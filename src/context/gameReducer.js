import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  absolutePosition: [],
  relativePosition: [],
  arePopUpsVisible: false,
  foundCharacters: undefined,
  isLoading: true,
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
        foundCharacters: payload.updatedCharArray,
      };
    case ACTIONS.TOGGLE_VISIBILITY:
      return {
        ...state,
        arePopUpsVisible: payload.newVisibility,
      };
    case ACTIONS.SET_FOUND_CHARS:
      return {
        ...state,
        foundCharacters: payload.foundChars,
      };
    case ACTIONS.SET_IS_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS.SET_GAME_OVER_TRUE:
      console.log('set game over true called');
      return {
        ...state,
        gameOver: true,
      };
    default:
      return state;
  }
};

export default gameReducer;
