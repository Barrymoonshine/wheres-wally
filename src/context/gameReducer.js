import ACTIONS from '../utils/ACTIONS';
import { updateFoundChar } from '../firebase/firebase';

// UI, non-game critical data stored locally in state
export const initialState = {
  // Absolute position (pageX & Y) is used for checking character locations
  // As this value doesn't change when the viewport is re-sized
  // Relative position (clientX & Y) is relative to view port size and used
  // To position the character menu and target components
  absolutePosition: [],
  relativePosition: [],
  arePopUpsVisible: false,
  foundCharacters: undefined,
  isLoading: true,
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
      return updateFoundChar(payload.selectedChar);
    case ACTIONS.TOGGLE_VISIBILITY:
      return {
        ...state,
        arePopUpsVisible: payload.newVisibility,
      };
    case ACTIONS.SET_FOUND_CHARS:
      console.log('set found chars called');
      return {
        ...state,
        foundCharacters: payload.foundChars,
      };
    case ACTIONS.UPDATE_IS_LOADING:
      console.log('UPDATE_IS_LOADING called');
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
