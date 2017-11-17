import * as firebase from "firebase";
// import "firebase/firestore";

// should go in a secret file
firebase.initializeApp({
  apiKey: "",
  authDomain: "xxxx-xxxxx.firebaseapp.com",
  databaseURL: "https://xxxx-xxxxx.firebaseio.com",
  projectId: "xxxx-xxxx"
});

export const firestore = firebase.firestore();

export default firebase;
