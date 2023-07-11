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

// Collection refs
const colRefCharLocations = collection(db, 'characterLocations');

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
    console.log(`ERROR: ${error}`);
  }
};
