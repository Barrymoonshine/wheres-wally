import { formatTime } from '../utils/utilFunctions';
import { getCharLocations } from '../firebase/firestoreProvider';

export const getMinutes = (seconds) => formatTime(Math.floor(seconds / 60));

export const getSeconds = (seconds) => formatTime(seconds % 60);

export const isLocationAllowed = async (selectedChar, absolutePosition) => {
  const characterLocations = await getCharLocations();
  const allowedLocations = [];

  for (let i = -15; i < 16; i += 1) {
    for (let y = -15; y < 16; y += 1) {
      const newArray = [];
      newArray.push(characterLocations[selectedChar][0] + i);
      newArray.push(characterLocations[selectedChar][1] + y);
      allowedLocations.push(newArray);
    }
  }

  const locationAllowed = allowedLocations.some(
    (setOfCords) =>
      setOfCords[0] === absolutePosition[0] &&
      setOfCords[1] === absolutePosition[1]
  );
  return locationAllowed;
};

export const totalObjValues = (object) =>
  Object.keys(object)
    .map((key) => object[key])
    .reduce((acc, curr) => acc + curr, 0);
