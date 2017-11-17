import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import firebase, { firestore } from "./firebase";
import store from "./store";
import { Provider } from "react-redux";
import { loginSuccessAction } from "./user";

import "./index.css";

// initial render
ReactDOM.render(
  <div className="App">loading</div>,
  document.getElementById("root")
);

const renderContent = user => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

// after login we are redirected here
firebase
  .auth()
  .getRedirectResult()
  .then(result => {
    if (result && result.user) {
      const { displayName, email, isAnonymous, photoURL } = result.user;
      // check if user already exists and add to people
      firestore
        .collection("people")
        .where("email", "==", email)
        .get()
        .then(snapshot => {
          if (snapshot.docs.length === 0) {
            firestore.collection("people").add({
              displayName,
              email,
              isAnonymous,
              photoURL
            });
          }
        });
    }
  });

// this checks if user is logged in
firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (user) {
    store.dispatch(loginSuccessAction(user));
  }
  renderContent();
});
