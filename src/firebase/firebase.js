import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBWfynwwXOweY2U5PpxKzJBpfjEFHR6Lc4',
  authDomain: 'where-s-wally-9cac8.firebaseapp.com',
  projectId: 'where-s-wally-9cac8',
  storageBucket: 'where-s-wally-9cac8.appspot.com',
  messagingSenderId: '567268274327',
  appId: '1:567268274327:web:8fef1f246bd6cf719939d2',
};

// Init firebase app
initializeApp(firebaseConfig);

// Init services
const db = getFirestore();

// Collection ref
// Separate collection for leader board
const colRef = collection(db, 'characterLocations');

// Get collection data

let characterLocations = {};

export const runGetDocs = () => {
  getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const key = Object.keys(doc.data()).toString();
      const value = doc.data()[key];
      console.log('key', key);
      console.log('value', value);
      characterLocations = { ...characterLocations, key: value };
    });
  });
  console.log('characterLocations', characterLocations);
  return characterLocations;
};
