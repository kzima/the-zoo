import * as firebase from "firebase";
// import "firebase/firestore";

// should go in a secret file
firebase.initializeApp({
  apiKey: process.env.REACT_FIREBASE_APIKEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_FIREBASE_DB,
  projectId: process.env.REACT_PROJECT_ID
});

export const firestore = firebase.firestore();

export default firebase;
