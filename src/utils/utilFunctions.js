export const formatTime = (time) =>
  time.toString().length === 1 ? `0${time}` : time;

export const capitaliseFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
