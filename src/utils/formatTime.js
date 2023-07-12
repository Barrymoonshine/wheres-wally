export const formatTime = (time) =>
  time.toString().length === 1 ? `0${time}` : time;
