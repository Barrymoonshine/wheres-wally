import { formatTime } from '../utils/utilFunctions';

export const getMinutes = (seconds) => formatTime(Math.floor(seconds / 60));

export const getSeconds = (seconds) => formatTime(seconds % 60);
