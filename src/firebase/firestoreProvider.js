import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  limit,
  orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Init firebase app
initializeApp(firebaseConfig);

// Init services
const db = getFirestore();

// Collection refs
const colRefCharLocations = collection(db, 'characterLocations');
const colRefLeaderBoard = collection(db, 'leaderBoard');

// Queries
const queryLeaderBoard = query(
  colRefLeaderBoard,
  orderBy('seconds', 'asc'),
  limit(10)
);

// Data getters
export const getCharLocations = async () => {
  try {
    let characterLocations = {};
    await getDocs(colRefCharLocations).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const key = Object.keys(doc.data()).toString();
        const value = doc.data()[key];
        characterLocations = { ...characterLocations, [key]: value };
      });
    });
    return characterLocations;
  } catch (error) {
    console.log(`ERROR, getCharLocations: ${error}`);
  }
};

export const getLeaderBoard = async () => {
  try {
    let leaderBoard = [];
    await getDocs(queryLeaderBoard).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        leaderBoard.push({ ...doc.data(), id: doc.id });
      });
    });
    return leaderBoard;
  } catch (error) {
    console.log(`ERROR getLeaderBoard: ${error}`);
  }
};

export const addToLeaderBoard = (newPlayer) => {
  addDoc(colRefLeaderBoard, { ...newPlayer });
};
