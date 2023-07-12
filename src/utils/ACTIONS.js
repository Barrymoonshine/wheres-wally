const ACTIONS = {
  START_GAME: 'start-the-game',
  INCREMENT_SECONDS: 'increment-seconds-by-one',
  TOGGLE_TARGET_MENU_VISIBILITY: 'toggle-target-menu-components-visibility',
  UPDATE_ABSOLUTE_POSITION: 'update-the-absolute-mouse-position',
  UPDATE_RELATIVE_POSITION: 'update-the-relative-mouse-position',
  UPDATE_FOUND_CHARACTER: 'update-the-found-character',
  // Toggle game over may not be needed as not needed for UI purposes
  TOGGLE_GAME_OVER: 'toggle-game-over-value',
  TOGGLE_WINNER_FORM_VISIBILITY: 'toggle-winner-form-visibility',
  TOGGLE_LEADER_BOARD_VISIBILITY: 'toggle-leader-board-visibility',
  UPDATE_WINNER_NAME: 'update-name-of-winner',
};

export default ACTIONS;
