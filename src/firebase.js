import * as firebase from "firebase";
// import "firebase/firestore";

console.log("project.env", process.env);

// should go in a secret file
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB,
  projectId: process.env.REACT_APP_PROJECT_ID
});

export const firestore = firebase.firestore();

export default firebase;
