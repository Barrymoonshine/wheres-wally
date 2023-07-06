import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  // Absolute position (pageX & Y) is used for checking character locations
  // As this value doesn't change when the viewport is re-sized
  // Relative position (clientX & Y) is relative to view port size and used
  // To position the character menu and target components
  absolutePosition: [],
  relativePosition: [],
  characterLocations: {
    wally: [1544, 118],
    odlaw: [96, 906],
    wilma: [1698, 356],
  },
  foundCharacters: {
    wally: false,
    odlaw: false,
    wilma: false,
  },
  arePopUpsVisible: false,
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
      console.log('{...state}', { ...state });
      console.log('payload.updatedChar', payload.updatedChar);
      return {
        ...state,
        foundCharacters: payload.updatedChar,
      };
    case ACTIONS.TOGGLE_VISIBILITY:
      return {
        ...state,
        arePopUpsVisible: payload.newVisibility,
      };
    default:
      return state;
  }
};

export default gameReducer;
