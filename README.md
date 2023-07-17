# Where's Wally

Live link: https://where-s-wally-9cac8.web.app

## Summary

Where's Wally is a photo-tagging app in which the user can click to locate Wally and his friends. The user's progress is tracked via two visual displays - on the top of the page and on the click menu, and their score is tracked via a timer.

On finding all the characters the user can input their name into the leader board which is saved in Firebase's database. The top ten scores are then collected from Firebase and displayed on the page.

This app was built using React to control the front-end and Firebase BaaS to store game critical data in the back-end.

## Key skills employed

**Firebase**

- Importing the `addDoc` and `getDocs` functions to asynchronously add new users to the Firestore database and check whether the location selected by the user is correct
- Utlising the `query` function to sort leader board data in ascending order and only display the top ten scores
- Deploying a React app on Firebase using the Firebase Hosting Service

**React**

- Making asynchronous calls to an external data base to query and add data based on the user's interaction with the app
- Centrally managing state with the `useReducer` hook and making this available throughout the application with the `useContext` hook
- Creating the custom hooks `useGame`, `useGameState` and `useGameDispatch` to logically store code related to state
- Working with helper and util functions to help keep components and hooks clean of game and formatting logic
